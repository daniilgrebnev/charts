import { useEffect } from 'react'
import './App.css'
import { Analytics } from './components/analytics/Analytics'
import { Header } from './components/header/Header'
import { RadarGraph } from './components/radar-graph/RadarGraph'
import { useAppDispatch } from './hooks'
import { fetchData } from './store/chartsStore'

function App() {
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(fetchData())
	}, [])
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
