import { describe, test, expect, vi } from 'vitest'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '../pages/App'

describe('Application root', () => {
	test('should render without crashing', () => {
		const spy = vi.spyOn(ReactDOM, 'createRoot')
		const div = document.createElement('div')
		div.id = 'root'
		document.body.appendChild(div)
		const root = ReactDOM.createRoot(div)
		root.render(<App />)
		expect(spy).toHaveBeenCalledWith(div)
	})
})
