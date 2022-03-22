export class EventCreator<T> {
	private eventName: string;
	private data = {};
	constructor(eventName: string) {
		this.eventName = eventName;
	}

	addData(detail: T) {
		this.data = {
			detail,
		};
		return this;
	}

	dispatchEvent() {
		const event = new CustomEvent(this.eventName, this.data);
		window.dispatchEvent(event);
	}
}
