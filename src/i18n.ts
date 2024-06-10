import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          greeting: {
            title1: "Test 1",
            title2: "Test 2",
            title3: "Test 3",
            desc1: "Layout & Style",
            desc2: "Connect API",
            desc3: "Form & Table",
            moveShape: "Move Shape",
            movePostion: "Move Position"
          }
        }
      },
      th: {
        translation: {
          greeting: {
            title1: "แบบทดสอบที่ 1",
            title2: "แบบทดสอบที่ 2",
            title3: "แบบทดสอบที่ 3",
            desc1: "การจัดการหน้าเว็บ",
            desc2: "การเชื่อมต่อ API",
            desc3: "การจัดการหน้าฟอร์ม",
            moveShape: "เลื่อนรูปแบบ",
            movePostion: "เปลี่ยนตำแหน่ง"
          }
        }
      }
    }
  });

export default i18n;