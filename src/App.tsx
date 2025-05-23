import './App.css'
import { Analytics } from './components/analytics/Analytics'
import { Header } from './components/header/Header'
import { RadarGraph } from './components/radar-graph/RadarGraph'

function App() {
	return (
		<>
			<Header />
			<div className='container content'>
				<Analytics />
				<RadarGraph />
			</div>
		</>
	)
}

export default App
