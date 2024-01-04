const router = require('express').Router();
const { exec } = require('child_process');
const iconv = require('iconv-lite');
const path = require('path');
const axios = require('axios');
const fs = require('fs');

function getRecommender(businessType, similarCnt, userCnt, visitCnt, workCnt, liveCnt, callback) {
    // console.log(businessType, similarCnt, userCnt, visitCnt, workCnt, liveCnt);
  
    const pythonProcess = exec(`python ./RecommenderSystem/Recommendation/recommender.py --business_type="${businessType}" --conditional_list="유사업종수 이용자수 방문인구 근무인구 거주인구" --many_list="${similarCnt} ${userCnt} ${visitCnt} ${workCnt} ${liveCnt}"`, { encoding: 'buffer' },  (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        callback(error, null);
      } else {
        // Python 스크립트 실행 결과 디코딩
        const rawResult = iconv.decode(stdout, 'cp949').trim();
        // JSON 문자열을 배열로 파싱
        const result = JSON.parse(rawResult);
  
        callback(null, result);
      }
    });
  
    // Python 프로세스의 표준 입력으로 데이터 전달
    pythonProcess.stdin.end();
  }

  
router.post('/getRecommender', async (req, res) => {
    const {businessType, similarCnt, userCnt, visitCnt, workCnt, liveCnt} = req.body;

    getRecommender(businessType, similarCnt, userCnt, visitCnt, workCnt, liveCnt, (error, result) => {
        if (error) {
          res.send({result: false, error: 'Failed to execute Python script.'})
        } else {
          res.send({result: true, data:result});
        }
      });

    // res.send({result:true, similarCnt, userCnt, visitCnt, workCnt, liveCnt});
})

router.post('/getRecommenderReason', async (req, res) => {
    const {w, h, center, level, maptype, mapName} = req.body;

    const orgImgPath = path.join(__dirname, '../public/images', mapName + '.jpeg')
    
    if(fs.existsSync(orgImgPath)) {
        // 이미 파일이 있는 경우
        res.send({result: true})
        return;
    }

    const orgImgData = await getNaverStaticMap(w, h, center, level, maptype);

    try {
        fs.writeFileSync(orgImgPath, orgImgData, 'binary');
    } catch (error) {
        console.error('Error saving image to file:', error);
        throw error;
    }

    makeBlendingMap(orgImgPath, path.join(__dirname, '../public/images'), mapName + '_blending.jpeg', (error, result) => {
        if (error) {
          res.send({result: false, error: 'Failed to execute Python script.'})
        } else {
          res.send({result: true});
        }
    });

})

router.get('/image/:imageName', async (req, res) => {
    const imageName = req.params.imageName

    const imagePath = path.join(__dirname, '../public/images', imageName);

    res.sendFile(imagePath, (err) => {
        if(err) {
            console.error(err)
            res.send('Image not found');
        }
    })
})

const getNaverStaticMap = async (w, h, center, level, maptype) => {
    try {
      const response = await axios.get(`https://naveropenapi.apigw.ntruss.com/map-static/v2/raster?w=${w}&h=${h}&center=${center}&level=${level}&maptype=${maptype}`, {
        responseType: 'arraybuffer', // 이 옵션을 사용하여 바이너리 데이터로 응답 받음
        headers: {
          'X-NCP-APIGW-API-KEY-ID' : '01ppg900q3',
          'X-NCP-APIGW-API-KEY' : 'vjFIJu27exH8bvDjvFgav4hQwrQQSadvKAq8K9ND'
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching image:', error);
      throw error;
    }
};

const makeBlendingMap = (inputPath, outputPath, outputFileName, callback) => {
    const pythonProcess = exec(`python ./Segmentation/inference.py --input_path="${inputPath}" --output_path="${outputPath}" --output_file_name="${outputFileName}"`, { encoding: 'buffer' },  (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing Python script: ${error}`);
          callback(error, null);
        } else {
    
          callback(null, null);
        }
      });
}
module.exports = router;