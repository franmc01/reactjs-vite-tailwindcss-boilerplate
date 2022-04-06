import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import './locales/index'
import App from './pages/App'
import './assets/styles/index.css'

const root = createRoot(document.getElementById('root')!)
root.render(
	<StrictMode>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</StrictMode>
)
