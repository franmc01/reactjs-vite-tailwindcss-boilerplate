import React, { useState, useEffect } from 'react';
import { EVENT_NINJA } from '../../constants';

export const ObserverComponent = () => {
	const [ninjas, setNinjas] = useState<string[]>([]);
	useEffect(() => {
		const callback = (event: CustomEvent<{ ninja: string }>) => {
			setNinjas((allNinjas) => allNinjas.concat(event.detail.ninja));
		};
		window.addEventListener(EVENT_NINJA, callback as EventListener);
		return () => {
			window.removeEventListener(EVENT_NINJA, callback as EventListener);
		};
	}, []);
	return (
		<>
			<h1 className='font-medium'>Observer Component</h1>
			<ul className='divide-y divide-gray-200'>
				{ninjas.map((value, key) => (
					<li className='flex py-4' key={key}>
						<p className='font-medium text-gray-900'>{value}</p>
					</li>
				))}
			</ul>
		</>
	);
};
