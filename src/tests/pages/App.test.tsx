import { render, screen } from '@testing-library/react';
import App from '../../pages/App';

describe('When render <App /> page', () => {
	test('should render it self', () => {
		render(<App />);
		screen.debug();
	});
});
