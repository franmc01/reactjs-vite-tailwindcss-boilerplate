import { useTranslation } from 'react-i18next'
import NavBar from '../components/NavBar'

const App = () => {
	const { t } = useTranslation()
	return (
		<>
			<NavBar />
		</>
	)
}

export default App
