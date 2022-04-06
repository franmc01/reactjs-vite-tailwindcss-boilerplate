import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest'
import { EventCreator } from '../../utils/EventCreator'

describe('When called Event Creator', () => {
	let creator: EventCreator<{ test: string }> | null
	beforeEach(() => {
		creator = new EventCreator<{ test: string }>('TEST')
	})
	afterEach(() => {
		creator = null
	})
	test('should create an event', () => {
		const spyDispathEvent = vi.spyOn(window, 'dispatchEvent')
		creator?.addData({ test: 'test' }).dispatchEvent()
		expect(spyDispathEvent).toHaveBeenCalled()
	})
	test('should create an event', () => {
		const spyAddEventListener = vi.spyOn(window, 'addEventListener')
		creator?.addData({ test: 'test' }).dispatchEvent()
		window.addEventListener('TEST', ((event: CustomEvent<{ test: string }>) => {
			expect(event.detail.test).toEqual('test')
		}) as EventListener)
		expect(spyAddEventListener).toHaveBeenCalled()
	})
})
