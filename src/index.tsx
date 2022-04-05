import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './locales/index';
import App from './pages/App';
import './assets/styles/index.css';

const theme = extendTheme({
	colors: {
		pink: {
			50: '#FED7D7',
			400: '#F56565',
		},
	},
});

const root = createRoot(document.getElementById('root')!);
root.render(
	<StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</StrictMode>
);
