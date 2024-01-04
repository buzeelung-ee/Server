<template>
    <div class="w-full h-screen flex flex-col items-center  bg-white p-4">
        <img className="mt-16 mx-auto" :src="lgUrl" />
        <div class="bg-white w-full flex flex-col justify-end items-center mt-5">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm m-4" data-v0-t="card">
                <div class="py-4 px-6 text-sm text-gray-500 dark:text-gray-400" v-html="displayText">
                </div>
            </div>
        </div>
        <div class="bg-white flex flex-col justify-end items-center mt-5" v-if="isTextFinish">
            <select v-model="businessType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="" selected>부지의 목적을 선택해주세요</option>
                <option value="음식점">음식점</option>
                <option value="농사">농사</option>
                <option value="가게">가게</option>
            </select>
        </div>
        <div class="bg-white w-full flex flex-col justify-end items-center mt-5" v-if="isTextFinish">
            <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="True" class="sr-only peer" v-model="c_유사업종수">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">유사업종이 {{c_유사업종수 ? "많은" : "적은"}} 곳</span>
            </label>
            <label class="relative inline-flex items-center cursor-pointer mt-5">
                <input type="checkbox" value="True" class="sr-only peer" v-model="c_이용자수">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">이용자수가 {{c_이용자수 ? "많은" : "적은"}} 곳</span>
            </label>
            <label class="relative inline-flex items-center cursor-pointer mt-5">
                <input type="checkbox" value="True" class="sr-only peer" v-model="c_방문인구">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">방문인구가 {{c_방문인구 ? "많은" : "적은"}} 곳</span>
            </label>
            <label class="relative inline-flex items-center cursor-pointer mt-5">
                <input type="checkbox" value="True" class="sr-only peer" v-model="c_근무인구">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">근무인구가 {{c_근무인구 ? "많은" : "적은"}} 곳</span>
            </label>
            <label class="relative inline-flex items-center cursor-pointer mt-5">
                <input type="checkbox" value="True" class="sr-only peer" v-model="c_거주인구">
                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">거주인구가 {{c_거주인구 ? "많은" : "적은"}} 곳</span>
            </label>
            <button @click="nextStep()" class="mt-10 inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-blue-500 text-white font-bold py-2 px-8 rounded">
            추천받기
            </button>
        </div>
    </div>
</template>

<script setup>
    import lgUrl from '@/assets/lg.png'
    import { onMounted, computed, ref } from 'vue';
    
    import { useRouter } from 'vue-router';
    const router = useRouter();

    const text = ref("");
    const textLength = ref(0);
    const isTextFinish = ref(false);

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
        typing("안녕하세요!<br/>부지렁이입니다!<br/>제주 위성데이터를 활용하여<br/>제주도의 좋은 부지를 추천해드릴게요!<br/><br/>부지의 목적과 세부옵션을 선택해주세요!")
    })

    const nextStep = async () => {
        const response = await fetch('/api/getRecommender', {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                businessType: businessType.value,
                similarCnt: c_유사업종수.value,
                userCnt: c_이용자수.value,
                visitCnt: c_방문인구.value,
                workCnt: c_근무인구.value,
                liveCnt: c_거주인구.value
            })
        });

        const result = await response.json();

        if(!result.result) {
            alert(result.error);
            return;
        }

        router.push({path: "/step3", query: {
            businessType: businessType.value,
            similarCnt: c_유사업종수.value,
            userCnt: c_이용자수.value,
            visitCnt: c_방문인구.value,
            workCnt: c_근무인구.value,
            liveCnt: c_거주인구.value,
            mapName: result.data[0]
        }})
    }
</script>

<style scoped>
</style>