import i18next, { i18n as i18nInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LiquidParse from '../liquid/LiquidParse';

import es from './es/es.json';
import en from './en/en.json';

const LANG = LiquidParse.parse('{{site.language}}');
const resources = {
	es,
	en,
};
const createI18n = (): i18nInstance => {
	const i18n = i18next.createInstance().use(initReactI18next);

	i18n.init({
		lng: LANG,
		fallbackLng: 'en',
		resources,
		interpolation: {
			escapeValue: false,
		},
	});

	return i18n;
};

const i18Instance = createI18n();

export default i18Instance;
