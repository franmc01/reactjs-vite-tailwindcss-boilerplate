import { useTranslation } from 'react-i18next';
// import NavBar from '../components/NavBar/index';
import SimpleSidebar from '../components/SideBar';

const App = () => {
	const { t } = useTranslation();
	return (
		<>
			{/* <NavBar /> */}
			<SimpleSidebar>{t('title')}</SimpleSidebar>
		</>
	);
};

export default App;
