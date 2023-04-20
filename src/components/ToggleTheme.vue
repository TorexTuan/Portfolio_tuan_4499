<template>
  <toggle-button
    isTheme
    class="mt-4 mx-auto"
    :initialValue="isDarkMode"
    @toggle="toggleMode"
  >
    <template v-slot:theme="{ isToggle }">
      <img
        class="toggle-btn"
        :class="{ 'translate-x-[120%]': isToggle }"
        :src="
          isToggle
            ? require('../assets/icons/crescent-moon.png')
            : require('../assets/icons/sun-icon.png')
        "
      />
    </template>
  </toggle-button>
</template>

<script>
import ToggleButton from './common/ToggleButton.vue';
export default {
  components: {
    ToggleButton
  },
  data() {
    return {
      isDarkMode: false
    };
  },
  mounted() {
    if (localStorage.getItem('theme') == 'dark') {
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  },
  methods: {
    toggleMode(result) {
      this.isDarkMode = result;
    }
  },
  watch: {
    isDarkMode() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    }
  }
};
</script>
