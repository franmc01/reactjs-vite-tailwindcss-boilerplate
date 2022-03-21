interface Type {
	name: string;
	value: string;
}
interface Assets {
	image: Type;
}
export interface Variables {
	assets: Assets;
}

export const liquidVariables: Variables = {
	assets: {
		image: {
			name: 'logo',
			value: "{{ 'a7a4b683-f68a-4385-8d1c-4f3374dd2213' | asset_image }}",
		},
	},
};
