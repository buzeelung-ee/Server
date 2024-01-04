import numpy as np
import torch
import PIL.Image as Image

from model.unet_resnet50 import UNetWithResnet50Encoder
import torchvision.transforms as transforms
import argparse
import os

script_dir = os.path.dirname(os.path.abspath(__file__))

def load_model(ckpt_pth, device):
    ckpt_dict = torch.load(ckpt_pth, map_location=device)
    model = UNetWithResnet50Encoder(n_classes=5).to(device)
    model.load_state_dict(ckpt_dict['model_state_dict'])
    return model


def form_colormap(prediction, mapping):
    print(prediction.shape)
    h, w = prediction.shape
    color_label = np.zeros((h,w,3),dtype=np.uint8)
    color_label = mapping[prediction]
    color_label = color_label.astype(np.uint8)
    return color_label


def infer(img):
    device = torch.device('cuda:0' if torch.cuda.is_available() else 'cpu')
    transform_to_tensor = transforms.Compose(
        [
            transforms.Resize((512, 512)),
            transforms.ToTensor(),
            transforms.Normalize(mean=(0.5, 0.5, 0.5), std=(0.5, 0.5, 0.5)),
        ]
    )

    img = transform_to_tensor(img).unsqueeze(0)
    ckpttt = os.path.join(script_dir, 'ckp', '47.pth')
    print('aaa', ckpttt)
    model = load_model(ckpt_pth=ckpttt, device=device)
    with torch.no_grad():
        model.eval()
        img = img.to(device)
        logits = model(img)

        # class name: 건물, 도로, 농경지, 산림, 배경 --> 0, 1, 2, 3, 4
        # gt_values = {
        #     # yellow -> 건물
        #     0: [255, 255, 0],
        #     # red -> 도로
        #     1: [255, 0, 0],
        #     # blue -> 농경지
        #     2: [0, 0, 255],
        #     # green -> 산림
        #     3: [0, 255, 0],
        #     # black -> 배경
        #     4: [0, 0, 0]
        # }
        class_map = [np.array([255, 255, 0]), np.array([255, 0, 0]), np.array([0, 0, 255]),
                     np.array([0, 255, 0]), np.array([0, 0, 0])]
        pred = logits.argmax(1)[0].cpu().detach().numpy()
        pred_colored = form_colormap(pred, np.array(class_map))

    return pred_colored


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--input_path', type=str, default='D:/Side/AI_FACTORY/Clipping/K3A_20200504045549_28203_00042683_L1R_PS/K3A_20200504045549_28203_00042683_L1R_br.jpg', help='input data path')
    parser.add_argument('--output_path', type=str, default='D:/Side/AI_FACTORY/backup/UnetResnet50_newLoader/ai_factory_data_sample', help='output save path')
    parser.add_argument('--output_file_name', type=str, default='K3A_20200504045549_28203_00042683_L1R_br.jpg', help='output save file name[ex) temp.jpg]')
    args = parser.parse_args()

    img = Image.open(args.input_path).convert('RGB')
    pred = infer(img)
    pred = Image.fromarray(pred)
    pred.save(f'{args.output_path}/{args.output_file_name}')
