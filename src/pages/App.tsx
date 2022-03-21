import { getTypeFromLiquid } from '../utils/getTypeFromLiquid';
const App = () => {
	const image = getTypeFromLiquid('{{assets.image.value}}');
	console.log(image);
	return (
		<div className='py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8'>
			<div className='text-center'>
				{image != null ? (
					image
				) : (
					<img
						src='https://cloud.modyocdn.com/uploads/a7a4b683-f68a-4385-8d1c-4f3374dd2213/original/logo-tailwind_e8c14e87.png'
						alt='logo-tailwind'
						className='object-contain mx-auto w-96 h-48'
					/>
				)}

				<h1 className='text-4xl font-semibold tracking-wide text-blue-900 uppercase'>
					Hello World!
				</h1>
			</div>
		</div>
	);
};

export default App;
