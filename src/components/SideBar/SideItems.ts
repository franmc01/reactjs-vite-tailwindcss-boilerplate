export interface NavItem {
	label: string
	subLabel?: string
	children?: Array<NavItem>
	href?: string
}

export const NAV_ITEMS: Array<NavItem> = [
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

export const SIDE_PAGE_ITEMS: Array<NavItem> = [
	{
		label: '',
	},
]
