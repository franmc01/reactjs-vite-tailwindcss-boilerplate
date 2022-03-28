import { describe, test, expect, vi } from 'vitest';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages/App';

describe('Application root', () => {
	test('should render without crashing', () => {
		const spy = vi.spyOn(ReactDOM, 'render');
		const div = document.createElement('div');
		div.id = 'root';
		document.body.appendChild(div);
		ReactDOM.render(
			<React.StrictMode>
				<App />
			</React.StrictMode>,
			div
		);
		expect(spy).toHaveBeenCalledWith(
			<React.StrictMode>
				<App />
			</React.StrictMode>,
			div
		);
	});
});
