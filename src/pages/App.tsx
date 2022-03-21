import { ChangeEvent, useState } from 'react';
// import { getTypeFromLiquid } from '../utils/getTypeFromLiquid';
import { ObserverComponent } from '../components/ObserverComponent';
import { PublisherComponent } from '../components/PublisherComponent';

const App = () => {
	// const image = getTypeFromLiquid('{{assets.image.value}}');
	const [ninja, setNinja] = useState('');
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setNinja(event.target.value);
	};
	return (
		<div className='py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8'>
			<div className='text-center'>
				<img
					src='https://cloud.modyocdn.com/uploads/a7a4b683-f68a-4385-8d1c-4f3374dd2213/original/logo-tailwind_e8c14e87.png'
					alt='logo-tailwind'
					className='object-contain mx-auto w-96 h-48'
				/>

				<h1 className='text-4xl font-semibold tracking-wide text-blue-900 uppercase'>
					Hello World!
				</h1>

				<form
					className='my-5'
					onSubmit={(ev) => {
						ev.preventDefault();
					}}
				>
					<input
						type='text'
						className='py-2 px-3 mb-3 w-full leading-tight text-gray-700 rounded border focus:outline-none shadow appearance-none'
						onChange={onChangeInput}
						placeholder='Enter the name of a famous ninja you know'
					/>
					<PublisherComponent ninja={ninja} />
					<ObserverComponent />
				</form>
			</div>
		</div>
	);
};

export default App;
