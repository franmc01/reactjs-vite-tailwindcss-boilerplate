import React, { ReactNode } from 'react';
import {
	IconButton,
	Box,
	CloseButton,
	Flex,
	Link,
	Drawer,
	DrawerContent,
	Text,
	BoxProps,
	FlexProps,
	useColorModeValue,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ReactText } from 'react';
import { SIDE_ITEMS } from './SideItems';
import Config from '../../config';

export default function SidebarWithHeader({
	children,
}: {
	children: ReactNode;
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [isLargerThan720] = useMediaQuery('(min-width: 720px)');
	return (
		<Box minH='100vh' bg={useColorModeValue('gray.100', 'gray.900')}>
			<SidebarContent
				onClose={() => onClose}
				display={{ base: 'none', md: 'block' }}
				isSide={true}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size='full'
			>
				<DrawerContent>
					<SidebarContent onClose={onClose} isSide={true} />
				</DrawerContent>
			</Drawer>
			{/* mobilenav */}
			<MobileNav onOpen={onOpen} isLargerThan720={isLargerThan720} />
			<Box ml={{ base: 0, md: 60 }} p='4'>
				{children}
			</Box>
		</Box>
	);
}

interface SidebarProps extends BoxProps {
	onClose: () => void;
	isSide: boolean;
}

const SidebarContent = ({ isSide, onClose, ...rest }: SidebarProps) => {
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
			<Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
				<Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
					Logo
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{SIDE_ITEMS.map((item) => (
				<NavItem key={item.label} isSide={isSide}>
					{item.label}
				</NavItem>
			))}
		</Box>
	);
};

interface NavItemProps extends FlexProps {
	children: ReactText;
	isSide: boolean;
}
const NavItem = ({ isSide, children, ...rest }: NavItemProps) => {
	return (
		<Link
			href='#'
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
		>
			<Flex
				align='center'
				p='4'
				mx='4'
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
	);
};

interface MobileProps extends FlexProps {
	onOpen: () => void;
	isLargerThan720: boolean;
}
const MobileNav = ({ onOpen, isLargerThan720, ...rest }: MobileProps) => {
	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height='20'
			alignItems='center'
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth='1px'
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			{...rest}
		>
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant='outline'
				aria-label='open menu'
				icon={<HamburgerIcon />}
			/>

			<Text
				display={{ base: 'flex', md: 'none' }}
				fontSize='2xl'
				fontFamily='monospace'
				fontWeight='bold'
			>
				Logo
			</Text>
			{isLargerThan720 &&
				SIDE_ITEMS.map((item) => (
					<NavItem key={item.label} isSide={false}>
						{item.label}
					</NavItem>
				))}
		</Flex>
	);
};
