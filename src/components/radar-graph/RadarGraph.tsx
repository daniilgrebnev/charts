import { useEffect, useRef, useState } from 'react'
import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from 'recharts'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setActiveId } from '../../store/chartsStore'
import { CustomRadarAngleAxis } from './components/CustomRadarAngleAxis'
import { CustomRadarShape } from './components/CustomRadarShape'

export function RadarGraph() {
	const store = useAppSelector(state => state.data)
	const dispatch = useAppDispatch()
	const activeId = store.activeId

	// Находим индекс активного элемента
	const activeIndex = store.items.findIndex(item => item.id === activeId)

	const data = store.items.map(item => ({
		value: item.data[0][item.data[0].length - 1],
	}))

	const setActive = (index: number) => {
		const item = store.items[index]
		dispatch(setActiveId(item.id))
	}

	const containerRef = useRef<HTMLDivElement>(null)
	const [radius, setRadius] = useState(0)
	const outerRadius = 0.8

	useEffect(() => {
		const resize = () => {
			if (containerRef.current) {
				const { offsetWidth, offsetHeight } = containerRef.current
				const size = Math.min(offsetWidth, offsetHeight)
				setRadius(size * outerRadius * 0.5)
			}
		}
		resize()
		window.addEventListener('resize', resize)
		return () => window.removeEventListener('resize', resize)
	}, [])

	return (
		<div className='radar-chart' ref={containerRef}>
			<ResponsiveContainer width={'100%'} height={'100%'}>
				<RadarChart
					cx={'50%'}
					cy={'50%'}
					outerRadius={`${outerRadius * 100}%`}
					data={data}
				>
					<PolarGrid gridType='circle' />
					<PolarRadiusAxis
						axisLine={false}
						tick={<></>}
						angle={30}
						domain={[-25, 100]}
					/>
					<PolarAngleAxis
						tick={
							<CustomRadarAngleAxis
								radius={radius}
								onChangeElement={setActive}
								activeIndex={activeIndex} // Передаем индекс, а не ID
							/>
						}
					/>
					<Radar
						name='Custom'
						dataKey='value'
						shape={
							<CustomRadarShape
								activeIndex={activeIndex} // Передаем индекс, а не ID
								onChangeElement={setActive}
								radius={radius}
							/>
						}
						isAnimationActive={false}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	)
}
