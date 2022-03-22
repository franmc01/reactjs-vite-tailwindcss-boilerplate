import React, { FC } from 'react';
import { EVENT_NINJA } from '../../constants';
import { EventCreator } from '../../utils/EventCreator';
const ninjaEvent = new EventCreator<{ ninja: string }>(EVENT_NINJA);
type PublisherProps = {
	ninja: string;
};
export const PublisherComponent: FC<PublisherProps> = ({ ninja }) => {
	const handleClick = (ninja: string) => () => {
		ninjaEvent.addData({ ninja }).dispatchEvent();
	};
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
