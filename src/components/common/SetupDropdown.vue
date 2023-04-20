<template>
  <div 
    class="rounded-[10px] box-shadow-light dark:box-shadow-dark transition-all_500_ease bg-white"
    v-if="!hideDropdown"
    tabindex="0"
    @focusout="handleFocusOut('dropdown')"
  >
    <div 
      class="text-white cursor-pointer flex-between transition-slow-all p-2 overflow-hidden" 
      @click="toggleDropdown()"
    >
      <span class="dark:text-white text-slate-800">{{ $t(`${selectedLang}`) }}</span>
      <span 
        class="caret"
        :class="{'rotate-0': isOpenPanel}"
      ></span>
    </div>
    <ul
      class="dark:bg-slate-900 rounded-[10px] dark:text-white absolute top-[calc(100%+4px)] cursor-pointer overflow-hidden w-full bg-white text-slate-800 shadow-[0_.5rem_1rem_rgba(0,0,0,0.2)]"
      v-if="isOpenPanel"
    >
      <li 
        v-for="(lang, index) of languages" 
        :key="index"
        class="px-2 py-2 first:pb-1 last:pt-1 dark:hover:bg-slate-700 hover:bg-slate-100"
        @click="changeLanguage(lang)"
      >
        {{ $t(`${lang.name}`) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenPanel: false,
      languages: [],
      selectedLang: ''
    }
  },
  mounted() {
    this.initialActions();
  },  
  methods: {
    handleFocusOut() {
      this.isOpenPanel = false;
    },
    initialActions() {
      this.languages = [
        {
          name: 'vietnamese',
          value: 'vn'
        },
        {
          name: 'english',
          value: 'en'
        }
      ];

      if(this.languages) {
        this.selectedLang = this.languages.length > 0 && this.languages[0].name;
      }
      
    },
    toggleDropdown() {
      this.isOpenPanel = !this.isOpenPanel;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang.value;
      this.selectedLang = lang.name;
      this.isOpenPanel = false;
    }
  },
  computed: {
    hideDropdown() {
      if(this.languages) {
        return this.languages.length == 0; 
      }
      return this.languages;
    }
  },
}
</script>