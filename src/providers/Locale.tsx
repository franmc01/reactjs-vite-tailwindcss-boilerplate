import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18Instance from '../locales';

const LocaleProvider: React.FC = ({ children }) => {
	return <I18nextProvider i18n={i18Instance}>{children}</I18nextProvider>;
};

export default LocaleProvider;
