<template>
  <div class="bg-slate-200 dark:bg-slate-800 h-full transition-all_500_ease relative">
    <SetupDropdown class="absolute top-5 right-7 w-32 dark:bg-slate-900" />
    <div 
      class="mx-auto py-8 w-fit cursor-pointer grid grid-cols-1"
    >
      <img
        class="rounded-[50%] mx-auto"
        width="100"
        height="100" 
        src="https://cdn.pixabay.com/photo/2021/04/04/16/18/beauty-6150625_1280.jpg" 
        alt="portrait"
      >
      <div class="flex-center flex-col">
        <div class="dark:text-white mt-4 mb-2 text-xl">{{ $t("fullName") }}</div>
        <div class="dark:text-white text-xs italic">{{ $t("position") }}</div>
      </div>
      <ToggleTheme />
    </div>
    <div class="max-w-3xl mx-auto grid grid-cols-4 gap-x-10">
      <SquareComponent
      class="dark:bg-slate-900 bg-white hover:bg-slate-100"
      v-for="(menu, index) of menus" :key="index" :menu="menu"/>
    </div>
    <div class="max-w-3xl mx-auto my-8">
      <div class="dark:text-white mt-4 mb-2 text-xl">{{ $t('title.general-information') }}</div>
      <SquareComponent 
        class="grid grid-cols-1 my-3"
        v-for="(menu, index) of menus" 
        :key="index" 
        :menu="menu"
      />
    </div>
  </div>
</template>

<script>
import SetupDropdown from './components/common/SetupDropdown.vue';
import SquareComponent from './components/common/SquareComponent.vue';
import ToggleTheme from './components/ToggleTheme.vue';

export default {
  components: {
    SetupDropdown,
    ToggleTheme,
    SquareComponent
  },
  data() {
    return {
      menus: [
        "Thông tin chung",
        "Dự Án",
        "Sở Thích",
        "Điểm mạnh & Điểm yếu"
      ]
    }
  }
}

</script>

<style>
</style>

