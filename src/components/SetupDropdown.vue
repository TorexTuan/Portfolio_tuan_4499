<template>
  <div class="w-full">
    <div class="bar" @click="toggleDropdown()">
      <span>Language</span>
      <span 
        class="caret"
        :class="{'caret-rotate': isOpenPanel}"
      ></span>
      <select name="" id="" v-model="$i18n.locale">
        <option :value="lang" v-for="(lang, index) of languages" :key="index"></option>
      </select>
    </div>
    <ul
      class="panel w-full"
      v-if="isOpenPanel"
    >
      <li v-for="(lang, index) of languages" :key="index">
        {{ lang }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.bar {
  padding: 8px;
  background-color: #2a2f3b;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .5s ease;
}

.bar:hover {
  background-color: #323741;
}

.caret {
  width: 0;
  height: 0;
  border-top: 5px solid #fff;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  transform: rotate(180deg);
  transition: transform .3s ease-in-out;
}

.caret-rotate {
  transform: rotate(0);
}

.panel {
  background-color: #323741;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  position: absolute;
  top: calc(100% + 4px);
  cursor: pointer;
  overflow: hidden;
}

.panel > li {
  padding: 4px 8px;
  /* background-color: ; */
}

.panel > li:first-child {
  padding-top: 8px;
}

.panel > li:last-child {
  padding-bottom: 8px;
}

.panel > li:hover {
  background-color: #2a2d35;
}
</style>

<script>
import i18n from '@/locale/i18n';

export default {
  data() {
    return {
      isOpenPanel: false,
      languages: '',
      selectedLang: ''
    }
  },
  mounted() {
    // this.languages = ['vn', 'en']
    this.languages = [
      this.$t('vietnamese'),
      this.$t('english')
    ]
  },  
  methods: {
    toggleDropdown() {
      this.isOpenPanel = !this.isOpenPanel;
      i18n.global.t('en');
      i18n.allowComposition.valueOf('en')
      console.log(i18n);
    }
  },
  watch: {
    isOpenPanel() {
      if(this.isOpenPanel) {
        console.log();
      }
    }
  }
}
</script>