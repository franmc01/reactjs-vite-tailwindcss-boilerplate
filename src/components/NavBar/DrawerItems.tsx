import {
	Box,
	Flex,
	Text,
	CloseButton,
	useColorModeValue,
	BoxProps,
} from '@chakra-ui/react'
import { NavItem } from './NavItem'
import { NAV_ITEMS } from '../../config/NavItems'

interface SidebarProps extends BoxProps {
	onClose: () => void
	isSide: boolean
}

export const SidebarContent = ({ isSide, onClose, ...rest }: SidebarProps) => {
	return (
		<Box
			transition='3s ease'
			bg={useColorModeValue('white', 'gray.900')}
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos='fixed'
			h='full'
			{...rest}
		>
			<Flex h='20' alignItems='center' mx='6' justifyContent='space-between'>
				<Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
					Logo
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{NAV_ITEMS.nav.map((item) => (
				<NavItem mx='6' mb='2' key={item.label} isSide={isSide}>
					{item.label}
				</NavItem>
			))}
			<hr />
		</Box>
	)
}
