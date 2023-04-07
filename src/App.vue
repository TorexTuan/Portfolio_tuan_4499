<template>
  <div class="bg-white dark:bg-slate-800 h-screen transition-slow-all relative">
    <SetupDropdown class="absolute top-5 right-7 w-32" />
    <div 
      class="mx-auto py-8 w-fit cursor-pointer grid grid-cols-1"
    >
      <img
        class="rounded-[50%] hover:animate-[scaleHover_.5s_ease-in-out_forwards] mx-auto"
        width="100"
        height="100" 
        src="https://cdn.pixabay.com/photo/2021/04/04/16/18/beauty-6150625_1280.jpg" 
        alt="portrait"
      >
      <ToggleButton class="mt-12 mx-auto" />
      <div class="dark:text-white">{{ $t("fullName") }}</div>
    </div>
  </div>
</template>

<script setup>
import SetupDropdown from './components/SetupDropdown.vue';
import ToggleButton from './components/ToggleButton.vue';
</script>

<style>
</style>

