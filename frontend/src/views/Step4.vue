<template>
    <div class="w-full h-screen flex flex-col items-center  bg-white p-4">
        <img className="mx-auto" :src="lgUrl" />
        <div class="bg-white w-full flex flex-col justify-end items-center mt-2">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm m-4" data-v0-t="card" >
                <div class="py-4 px-6 text-sm text-gray-500 dark:text-gray-400" v-html="displayText">
                </div>
            </div>
        </div>
        <div class="" v-show="isTextFinish">
            <div class="w-full items-center align-center text-center text-gray-900 text-sm">
                위성 사진
                <img :src="'/api/image/' + mapName + '.jpeg'" class="w-full h-auto"/>
            </div>
            <div class="w-full items-center align-center text-center text-gray-900 text-sm mt-5">
                토지 피복지도
                <img :src="'/api/image/' + mapName + '_blending.jpeg'" style="margin: 0 auto;" />
            </div>
            <div class="w-full items-center align-center text-center text-gray-900 text-sm mt-5">
                블렌딩 사진
                <div class="relative " style="width: 500px; height: 500px; margin: 0 auto;">
                    <img :src="'/api/image/' + mapName + '.jpeg'" class="img" style="width:500px; height:500px margin: 0 auto;" />
                    <img :src="'/api/image/' + mapName + '_blending.jpeg'" class="img cover" style="width:500px; height:500px margin: 0 auto;"/>
                </div>
            </div>
            <div class="w-full items-center align-center text-center text-gray-900 text-sm mt-5" style="">
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm m-4" data-v0-t="card" >
                    <div class="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                        선택하셨던 옵션<br/><br/>
                        부지의 목적: <b>{{ businessType }}</b><br/>

                        유사업종이 <b>{{ c_유사업종수 ? "많" : "적"}}은곳</b><br/>
                        이용자수이 <b>{{ c_이용자수 ? "많" : "적"}}은곳</b><br/>
                        방문인구가 <b>{{ c_방문인구 ? "많" : "적"}}은곳</b><br/>
                        근무인구가 <b>{{ c_근무인구 ? "많" : "적"}}은곳</b><br/>
                        거주인구가 <b>{{ c_거주인구 ? "많" : "적"}}은곳</b><br/>
                    </div>
                </div>

            </div>
            
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm m-4 text-center" data-v0-t="card" >
                <router-link to="/" @click="nextStep()" class="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                    부지렁이에게 다시 추천받고싶다면?
                </router-link>
            </div>
        </div>
    </div>
    <div>
    </div>
</template>

<script setup>
    import lgUrl from '@/assets/lg.png'
    import { onMounted, ref, computed } from 'vue';
    import { useRouter, useRoute} from 'vue-router';

    const route = useRoute()
    const router = useRouter()

    const text = ref("");
    const textLength = ref(0);
    const isTextFinish = ref(false);

    const mapName = ref("")

    const businessType = ref("");
    const c_유사업종수 = ref(false);
    const c_이용자수 = ref(false);
    const c_방문인구 = ref(false);
    const c_근무인구 = ref(false);
    const c_거주인구 = ref(false);
    
    const displayText = computed(() => {
        return text.value.substring(0, textLength.value);
    })

    const typing = (newText) => {
        text.value = newText;
        _typing();
    }

    const _typing = () => {
        if(textLength.value == text.value.length) {
            text.value = text.value 
        + "색 설명<br/>"
        + "<font style='color:#e1e107'>노란색</font> -> 건물<br/>"
        + "<font color='red'>빨간색</font> -> 도로<br/>"
        + "<font color='blue'>파란색</font> -> 농경지<br/>"
        + "<font color='green'>초록색</font> -> 산림<br/>"
        + "<font color='black'>검은색</font> -> 배경<br/>"
            textLength.value = text.value.length;
            isTextFinish.value = true;
            return;
        }
        if(text.value.substring(textLength.value, textLength.value+1) == "<")
            textLength.value += 4;
        else
            textLength.value++;

        setTimeout(_typing, 50);
    }

    
    onMounted(() => {
        if(!route.query.mapName)
            router.push({path: '/'})
        mapName.value = route.query.mapName
        businessType.value = route.query.businessType
        c_유사업종수.value = JSON.parse(route.query.similarCnt)
        c_이용자수.value = JSON.parse(route.query.userCnt)
        c_방문인구.value = JSON.parse(route.query.visitCnt)
        c_근무인구.value = JSON.parse(route.query.workCnt)
        c_거주인구.value = JSON.parse(route.query.liveCnt)

        typing("제가 <b>" + mapName.value + "</b>을 추천드리는 이유를 위성데이터를 활용해서 보여드릴게요!"
        + "<br/><br/>"
        )
    })
</script>

<style scoped>
.img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.cover {
  opacity: 0.3; /* 불투명도 조절 */
}
</style>