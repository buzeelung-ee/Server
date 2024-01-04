<script setup>
import imageUrl from '@/assets/lg.png'
</script>

<template>
  <div class="w-full h-screen flex flex-col items-center justify-center bg-white p-4">
    <h1 class="text-5xl font-bold mb-4">부지렁이</h1>
    <p class="text-lg text-gray-600 text-center mb-8 max-w-md">
      2023년도 제주 위성데이터 활용 경진대회
    </p>
    <router-link to="/step2" class="mt-10 inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-blue-500 text-white font-bold py-2 px-8 rounded">
      시작하기
    </router-link>
    <img className="mt-16 mx-auto" :src="imageUrl" />
  </div>
</template>
