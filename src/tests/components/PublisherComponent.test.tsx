import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PublisherComponent } from '../../components/custom/PublisherComponent';

describe('When render <PublisherComponent />', () => {
	beforeEach(() => {
		render(<PublisherComponent ninja='naruto' />);
	});
	afterEach(cleanup);
	test('should render it self', () => {
		expect(screen.getByText('Add a ninja!')).toBeInTheDocument();
	});
	test('should fire click event by user', async () => {
		const spy = vi.spyOn(window, 'dispatchEvent');
		await userEvent.click(screen.getByRole('button'));
		expect(spy).toHaveBeenCalled();
	});
});
