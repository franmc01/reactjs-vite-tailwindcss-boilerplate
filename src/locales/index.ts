import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './es/es.json';
import en from './en/en.json';

const defaultNS = 'es';

const resources = {
	en: {
		en,
	},
	es: {
		es,
	},
} as const;

i18n.use(initReactI18next).init({
	lng: defaultNS,
	ns: ['es', 'en'],
	defaultNS,
	resources,
});

export default i18n;
