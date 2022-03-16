import { MODYO_SITE, MODYO_URL, MODYO_TOKEN } from '../constants';

interface Site {
	name: string;
	language: string;
	url: string;
}
interface Account {
	url: string;
}
interface User {
	access_token: string;
}

interface Type {
	name: string;
	value: string;
}
interface Assets {
	image: Type;
}
export interface Variables {
	site: Site;
	account: Account;
	user: User;
	assets: Assets;
}

export const liquidVariables: Variables = {
	site: {
		name: MODYO_SITE,
		language: 'es',
		url: `${MODYO_URL}/${MODYO_SITE}`,
	},
	account: {
		url: `${MODYO_URL}`,
	},
	user: {
		access_token: `${MODYO_TOKEN}`,
	},
	assets: {
		image: {
			name: 'logo',
			value: "{{ 'a7a4b683-f68a-4385-8d1c-4f3374dd2213' | asset_image }}",
		},
	},
};
