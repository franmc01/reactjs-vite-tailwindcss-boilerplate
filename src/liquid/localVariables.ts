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
export interface Variables {
	site: Site;
	account: Account;
	user: User;
}

export const liquidVariables: Variables = {
	site: {
		name: 'private-oauth2',
		language: 'es',
		url: 'https://iuvity.modyo.cloud/private-oauth2',
	},
	account: {
		url: 'https://iuvity.modyo.cloud',
	},
	user: {
		access_token: 'Zo1BHQwiWWZKATdo-ubgTz7KGBcgeOJSQ3pBbXjqmJ4',
	},
};
