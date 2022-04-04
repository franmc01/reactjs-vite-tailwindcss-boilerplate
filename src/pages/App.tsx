import { useTranslation } from 'react-i18next';
import LiquidParse from '../liquid/LiquidParse';

const image = LiquidParse.parse('{{vars.tailwind}}');
const App = () => {
	const { t } = useTranslation();
	return (
		<section className='py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8'>
			<div className='text-center'>
				<h1 className='text-4xl font-semibold tracking-wide text-blue-900 uppercase'>
					{t('search.placeholder')}
				</h1>
				<img
					src={image}
					alt='tailwind'
					className='object-contain mx-auto w-96 h-48'
				/>
			</div>
		</section>
	);
};

export default App;
