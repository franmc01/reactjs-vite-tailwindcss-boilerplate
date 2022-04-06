import {
	Box,
	Flex,
	Collapse,
	IconButton,
	Image,
	useColorModeValue,
	useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MobileNav } from './MobileNav'
import { DesktopNav } from './DesktopNav'

export default function WithSubnavigation() {
	const { isOpen, onToggle } = useDisclosure()

	return (
		<Box>
			<Flex
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.600', 'white')}
				minH={'60px'}
				py={{ base: 2 }}
				px={{ base: 4 }}
				borderBottom={1}
				borderStyle={'solid'}
				borderColor={useColorModeValue('gray.200', 'gray.900')}
				align={'center'}
			>
				<Flex
					flex={{ base: 1, md: 'auto' }}
					ml={{ base: -2 }}
					display={{ base: 'flex', md: 'none' }}
				>
					<IconButton
						onClick={onToggle}
						icon={
							isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
						}
						variant={'ghost'}
						aria-label={'Toggle Navigation'}
					/>
				</Flex>
				<Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
					<Image
						boxSize='50px'
						objectFit='cover'
						src='https://cloud.modyocdn.com/uploads/f3de9b9a-d0a7-4ad4-92e1-dc7b24021e87/original/favicon.png'
						alt='Iuvity'
					/>
				</Flex>
				<Flex flex={{ base: 2 }} justify={{ base: 'center', md: 'end' }}>
					<Flex display={{ base: 'none', md: 'flex' }} ml={10}>
						<DesktopNav />
					</Flex>
				</Flex>
			</Flex>

			<Collapse in={isOpen} animateOpacity>
				<MobileNav />
			</Collapse>
		</Box>
	)
}
