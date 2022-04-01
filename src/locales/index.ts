import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LiquidParse from '../liquid/LiquidParse';

import es from './es/es.json';
import en from './en/en.json';

const LANG = LiquidParse.parse('{{site.language}}');
const resources = {
	es,
	en,
};

i18n.use(initReactI18next).init({
	resources,
	lng: LANG,
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
});

const i18Instance = i18n;

export default i18Instance;
