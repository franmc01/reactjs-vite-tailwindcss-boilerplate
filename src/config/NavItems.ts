export interface NavItem {
	label: string
	subLabel?: string
	children?: Array<NavItem>
	href?: string
}

export const NAV_ITEMS = {
	nav: [
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
	],
	side: [
		{
			label: '',
		},
	],
}
