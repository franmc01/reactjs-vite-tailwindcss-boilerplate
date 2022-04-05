import { useTranslation } from 'react-i18next';
import Button from '../components/Button';

const App = () => {
	const { t } = useTranslation();
	return (
		<section>
			<div className='text-center'>
				<h1 className='text-4xl font-semibold tracking-wide text-blue-900 uppercase'>
					{t('search.placeholder')}
				</h1>
				<Button />
			</div>
		</section>
	);
};

export default App;
