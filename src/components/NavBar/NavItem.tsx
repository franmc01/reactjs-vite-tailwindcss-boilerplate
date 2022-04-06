import { ReactText } from 'react'
import { Link, Flex, FlexProps } from '@chakra-ui/react'
import Config from '../../config/colors'

interface NavItemProps extends FlexProps {
	children: ReactText
	isSide: boolean
}
export const NavItem = ({ isSide, children, ...rest }: NavItemProps) => {
	return (
		<Link
			href='#'
			style={{ textDecoration: 'none', fontWeight: '500', fontSize: '14.1px' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align='center'
				p='2'
				mx='2'
				role='group'
				cursor='pointer'
				_hover={{
					borderBottom: isSide
						? '0px solid transparent'
						: `3px solid ${Config.colorBorderNavbarItems}`,
					color: isSide ? Config.colorSideBarItems : '',
				}}
				{...rest}
			>
				{children}
			</Flex>
		</Link>
	)
}
