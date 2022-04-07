export interface NavItem {
	label: string
	href?: string
}

const nav: Array<NavItem> = [
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
]

export const NAV_ITEMS = {
	nav,
	side: {},
}
