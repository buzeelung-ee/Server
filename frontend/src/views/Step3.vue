<template>
    <div class="w-full flex flex-col items-center  bg-white p-4">
        <img className="mx-auto" :src="lgUrl" />
        <div class="bg-white w-full flex flex-col justify-end items-center mt-2">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm m-4" data-v0-t="card" >
                <div class="py-4 px-6 text-sm text-gray-500 dark:text-gray-400" v-html="displayText">
                </div>
            </div>
        </div>
        <div id="map"  ></div>
        <div class="" v-show="isTextFinish">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm m-4" data-v0-t="card" >
                <button @click="nextStep()" class="py-4 px-6 text-sm text-gray-500 dark:text-gray-400">
                    부지렁이가 추천한 이유가 궁금하다면?
                </button>
            </div>
        </div>
    </div>
    <div v-if="isLoading" class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div class="text-center text-white">
        <p class="text-xl font-semibold">부지렁이가 움직이는 중...</p>
        <!-- 추가적으로 로딩 아이콘 또는 메시지 등을 넣을 수 있습니다 -->
        </div>
    </div>
</template>

<script setup>
    import lgUrl from '@/assets/lg.png'
    import { onMounted, ref, computed } from 'vue';
    import { useRouter, useRoute} from 'vue-router';

    let map = null;

    const text = ref("");
    const textLength = ref(0);
    const isTextFinish = ref(false);

    const isLoading = ref(false);

    const businessType = ref("");
    const c_유사업종수 = ref(false);
    const c_이용자수 = ref(false);
    const c_방문인구 = ref(false);
    const c_근무인구 = ref(false);
    const c_거주인구 = ref(false);

    const pointerX = ref("");
    const pointerY = ref("");

    const displayText = computed(() => {
        return text.value.substring(0, textLength.value);
    })

    const typing = (newText) => {
        text.value = newText;
        _typing();
    }

    const _typing = () => {
        if(textLength.value == text.value.length) {
            isTextFinish.value = true;
            _makeMap()
            return;
        }
        if(text.value.substring(textLength.value, textLength.value+1) == "<")
            textLength.value += 4;
        else
            textLength.value++;

        setTimeout(_typing, 50);
    }

    const route = useRoute()
    const router = useRouter()

    const mapName = ref("")

    const _getMapSize = () => {
        if(window.innerWidth < 768)
            return window.innerWidth - 30
        else if(window.innerWidth < 1120)
            return window.innerWidth - 100
        else 
            return 1024
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

        map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(33.427337, 126.575834),
            zoom: 10,
        });

        map.setSize(new naver.maps.Size(_getMapSize(), _getMapSize()));

        typing("유사업종이 " + (c_유사업종수.value ? "많" : "적") + "으면서<br/>"
        + "이용자수가 " + (c_이용자수.value ? "많" : "적") + "고<br/>"
        + "방문인구가 " + (c_방문인구.value ? "많" : "적") + "으며<br/>"
        + "근무인구가 " + (c_근무인구.value ? "많" : "적") + "고<br/>"
        + "거주인구가 " + (c_거주인구.value ? "많" : "적") + "은곳<br/>" 
        + "그 중에서 " + (businessType.value) + "에 어울리는 곳이라..<br/><br/>"
        + "제가 추천하는 곳은 <b>" + mapName.value + "</b> 입니다!")
    })
    
    const _makeMap = () => {

        naver.maps.Service.geocode({ query: mapName.value }, function(status, response) {
            if (status === naver.maps.Service.Status.ERROR) {
                console.error(status, response)
            }

            var item = response.v2.addresses[0],
            point = new naver.maps.Point(item.x, item.y);

            pointerX.value = item.x
            pointerY.value = item.y
            
            map.setCenter(point);

            map.setOptions({
                zoom:15
            })
        });
    }
    
    const nextStep = async () => {
        isLoading.value = true;
        const response = await fetch('/api/getRecommenderReason', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                w: 1024,
                h: 1024,
                center: String(pointerX.value + "," + pointerY.value),
                level: 14,
                maptype: 'satellite_base',
                mapName: mapName.value
            })
        });

        const result = await response.json();

        if(!result.result) {
            alert(result.error);
            isLoading.value = false;
            return;
        }

        isLoading.value = false;

        router.push({path: "/step4", query: {
            businessType: businessType.value,
            similarCnt: c_유사업종수.value,
            userCnt: c_이용자수.value,
            visitCnt: c_방문인구.value,
            workCnt: c_근무인구.value,
            liveCnt: c_거주인구.value,
            mapName: mapName.value
        }})
    }
</script>

<style lang="scss" scoped>
</style>