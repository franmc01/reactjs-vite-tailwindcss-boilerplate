import React from 'react'
import { Drawer, DrawerContent } from '@chakra-ui/react'
import { SidebarContent } from './DrawerItems'

interface DrawerProps {
	isOpen: boolean
	onClose: () => void
}

export const DrawerComponet = ({ isOpen, onClose }: DrawerProps) => {
	return (
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
	)
}
