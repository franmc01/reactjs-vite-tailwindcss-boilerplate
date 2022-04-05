export interface SideItem {
	label: string;
	subLabel?: string;
	children?: Array<SideItem>;
	href?: string;
}

export const SIDE_ITEMS: Array<SideItem> = [
	{
		label: 'Empezando',
		href: '#',
	},
	{
		label: 'APIs',
		href: '#',
	},
	{
		label: 'SDKs',
		href: '#',
	},
	{
		label: 'Webhooks',
		href: '#',
	},
	{
		label: 'FAQ',
		href: '#',
	},
	{
		label: 'Soporte',
		href: '#',
	},
	{
		label: 'TODO1',
		href: '#',
	},
	{
		label: 'Salida',
		href: '#',
	},
];

export const SIDE_PAGE_ITEMS: Array<SideItem> = [
	{
		label: '',
	},
];
