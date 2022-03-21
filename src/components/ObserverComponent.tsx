import React, { useState, useEffect } from 'react';
import { Observable } from 'windowed-observable';

const observable = new Observable('konoha');

export const ObserverComponent = () => {
	const [ninjas, setNinjas] = useState<string[]>([]);
	useEffect(() => {
		const observer = (ninja: string) => {
			setNinjas((allNinjas) => allNinjas.concat(ninja));
		};
		observable.subscribe(observer);

		return () => {
			observable.unsubscribe(observer);
		};
	}, []);
	return (
		<ul className='divide-y divide-gray-200'>
			{ninjas.map((value, key) => (
				<li className='flex py-4' key={key}>
					<p className='font-medium text-gray-900'>{value}</p>
				</li>
			))}
		</ul>
	);
};
