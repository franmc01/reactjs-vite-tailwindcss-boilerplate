import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import {
	render,
	screen,
	cleanup,
	act,
	RenderResult,
} from '@testing-library/react';
import { EventCreator } from '../../utils/EventCreator';
import { ObserverComponent } from '../../components/custom/ObserverComponent';

describe('When render <ObserverComponent />', () => {
	let component: RenderResult;
	beforeEach(() => {
		component = render(<ObserverComponent />);
	});
	afterEach(() => {
		cleanup();
	});
	test('should render it self', () => {
		expect(screen.getByText('Observer Component')).toBeInTheDocument();
	});
	test('should show a test text after a custom event was dispatched', () => {
		const creator = new EventCreator<{ ninja: string }>('KONOHA');
		act(() => {
			creator.addData({ ninja: 'naruto' }).dispatchEvent();
			component.rerender(<ObserverComponent />);
		});
		expect(screen.getByText('naruto')).toBeInTheDocument();
	});
});
