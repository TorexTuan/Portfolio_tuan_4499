import { createApp } from 'vue'
import App from './App.vue'
import './index.css';
import i18n from './locales/i18n';

createApp(App).use(i18n).mount('#app')
