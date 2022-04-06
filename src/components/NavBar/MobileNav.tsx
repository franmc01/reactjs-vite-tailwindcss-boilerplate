import {
	Grid,
	Flex,
	IconButton,
	Text,
	FlexProps,
	useColorModeValue,
} from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { NAV_ITEMS } from '../../config/NavItems'
import { NavItem } from './NavItem'

interface MobileProps extends FlexProps {
	onOpen: () => void
	isOpen: boolean
	isLargerThan720: boolean
}
export const MobileNav = ({
	onOpen,
	isOpen,
	isLargerThan720,
	...rest
}: MobileProps) => {
	return (
		<Grid
			templateRows='repeat(1, 1fr)'
			templateColumns='repeat(2, 1fr)'
			gap={4}
			px={{ base: 4, md: 4 }}
			height='20'
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth='1px'
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
		>
			<Flex
				alignItems='center'
				justifyContent={{ base: 'space-between', md: 'flex-start' }}
				{...rest}
			>
				<IconButton
					display={{ base: 'flex', md: 'none' }}
					onClick={onOpen}
					variant='outline'
					aria-label='open menu'
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
				/>

				<Text
					display={{ base: 'flex', md: 'block' }}
					fontSize='2xl'
					fontFamily='monospace'
					fontWeight='bold'
				>
					Logo
				</Text>
			</Flex>
			<Flex
				alignItems='center'
				justifyContent={{ base: 'space-between', md: 'flex-end' }}
				{...rest}
			>
				{isLargerThan720 &&
					NAV_ITEMS.nav.map((item) => (
						<NavItem key={item.label} isSide={false}>
							{item.label}
						</NavItem>
					))}
			</Flex>
		</Grid>
	)
}
