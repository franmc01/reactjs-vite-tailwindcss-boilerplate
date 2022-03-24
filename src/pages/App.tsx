// import { getTypeFromLiquid } from '../utils/getTypeFromLiquid';
import { SubscriberComponent } from '../components/custom/SubscriberComponent';

const App = () => {
	// const image = getTypeFromLiquid('{{assets.image.value}}');
	return (
		<div className='py-16 px-4 mx-auto max-w-screen-xl sm:py-24 sm:px-6 lg:px-8'>
			<div className='my-5'>
				<SubscriberComponent />
			</div>
		</div>
	);
};

export default App;
