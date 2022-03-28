import React, { useState, useEffect } from 'react';
import { EVENT_NINJA } from '../../constants';

export const ObserverComponent = () => {
	const [ninjas, setNinjas] = useState<string[]>([]);
	useEffect(() => {
		window.addEventListener(EVENT_NINJA, ((
			event: CustomEvent<{ ninja: string }>
		) => {
			setNinjas((allNinjas) => allNinjas.concat(event.detail.ninja));
		}) as EventListener);
		return () => {
			window.removeEventListener(EVENT_NINJA, () => {
				setNinjas([]);
			});
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
