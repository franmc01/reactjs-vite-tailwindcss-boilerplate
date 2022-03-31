import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles/index.css';
import App from './pages/App';

const root = createRoot(document.getElementById('root')!);
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
