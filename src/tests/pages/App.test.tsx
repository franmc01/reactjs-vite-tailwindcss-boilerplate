import { describe, test, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../pages/App';

describe('When render <App /> component', () => {
	beforeEach(() => {
		render(<App />);
	});
	test('should render it self', () => {
		expect(screen.getByText('Hello World!')).toBeInTheDocument();
	});
});
