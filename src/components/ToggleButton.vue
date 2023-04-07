<template>
  <div 
    class="toggle-bar"
    :class="{ 'dark-mode-toggle-bar':isDarkMode }"
    @click="toggleMode()"
    >
    <img 
        class="toggle-btn"
        :class="{ 'dark-mode-toggle-btn':isDarkMode }"
        :src="isDarkMode 
        ? require('../assets/icons/crescent-moon.png')
        : require('../assets/icons/sun-icon.png')"
        >
    </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkMode: false
    }
  },
  mounted() {
    if(localStorage.getItem('theme') == 'dark') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  },
  methods: {
    toggleMode() {
      this.isDarkMode = !this.isDarkMode;
      console.log(this.isDarkMode);
    }
  },
  watch: {
    isDarkMode() {
      if(this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark'
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'
      }
      console.log('mode', this.isDarkMode);
    }
  }
}
</script>
