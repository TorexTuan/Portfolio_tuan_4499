import { createI18n } from "vue-i18n"
import vn from './vn.json'
import en from './en.json'

const i18n = createI18n({
  locale: 'vn',
  messages: {
    vn,
    en
  }
});

export default i18n;