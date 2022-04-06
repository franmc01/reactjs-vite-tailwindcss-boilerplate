import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Input,
	Button as ButtonCh,
	useDisclosure,
} from '@chakra-ui/react'
import { useRef, MutableRefObject } from 'react'

const Button = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const btnRef = useRef() as MutableRefObject<HTMLButtonElement>
	return (
		<>
			<ButtonCh ref={btnRef} onClick={onOpen}>
				Text
			</ButtonCh>
			<Drawer
				isOpen={isOpen}
				placement='bottom'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						<Input placeholder='Type here...' />
					</DrawerBody>

					<DrawerFooter>
						<ButtonCh variant='outline' mr={3} onClick={onClose}>
							Cancel
						</ButtonCh>
						<ButtonCh colorScheme='blue'>Save</ButtonCh>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}

export default Button
