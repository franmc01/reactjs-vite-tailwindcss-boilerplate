/// <reference types="vite/client" />
interface ImportMetaEnv {
	readonly VITE_MODYO_ACCOUNT_URL: string;
	readonly VITE_MODYO_VERSION: number;
	readonly VITE_MODYO_TOKEN: string;
	readonly VITE_MODYO_SITE_HOST: string;
	readonly VITE_MODYO_WIDGET_NAME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
