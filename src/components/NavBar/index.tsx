import React from 'react'
import {
	Box,
	useColorModeValue,
	useDisclosure,
	useMediaQuery,
} from '@chakra-ui/react'
import { MobileNav } from './MobileNav'
import { DrawerComponet } from './Drawer'

export default function NavBar() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isLargerThan720] = useMediaQuery('(min-width: 720px)')
	return (
		<Box bg={useColorModeValue('gray.100', 'gray.900')}>
			<DrawerComponet isOpen={isOpen} onClose={onClose} />
			{/* mobilenav */}
			<MobileNav
				isOpen={isOpen}
				onOpen={onOpen}
				isLargerThan720={isLargerThan720}
			/>
		</Box>
	)
}
