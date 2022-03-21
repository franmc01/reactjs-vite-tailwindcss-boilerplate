import React, { FC } from 'react';
import { Observable } from 'windowed-observable';

const observable = new Observable('konoha');
type PublisherProps = {
	ninja: string;
};
export const PublisherComponent: FC<PublisherProps> = ({ ninja }) => {
	const handleClick = (ninja: string) => () => observable.publish(ninja);
	return (
		<button
			type='button'
			className='py-2 px-4 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded'
			onClick={handleClick(ninja)}
		>
			Add a ninja!
		</button>
	);
};
