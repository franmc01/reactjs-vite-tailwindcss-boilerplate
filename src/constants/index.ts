export const isProduction = process.env.NODE_ENV === 'production';
export const MODYO_SITE = import.meta.env.MODYO_SITE_HOST as string;
export const MODYO_URL = import.meta.env.MODYO_ACCOUNT_URL as string;
export const MODYO_TOKEN = import.meta.env.MODYO_TOKEN as string;
