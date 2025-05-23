import { useEffect, useRef, useState } from 'react'
import {
	PolarAngleAxis,
	PolarGrid,
	PolarRadiusAxis,
	Radar,
	RadarChart,
	ResponsiveContainer,
} from 'recharts'
import { CustomRadarAngleAxis } from './components/CustomRadarAngleAxis'
import { CustomRadarShape } from './components/CustomRadarShape'

const data = [
	{ subject: 'A', value: 0 },
	{ subject: 'B', value: 13 },
	{ subject: 'C', value: 75 },
	{ subject: 'F', value: 15 },
	{ subject: 'B', value: 60 },
	{ subject: 'C', value: 75 },
	{ subject: 'F', value: 11 },
	{ subject: 'B', value: 60 },
	{ subject: 'C', value: 75 },
	{ subject: 'F', value: 63 },
	{ subject: 'B', value: 60 },
	{ subject: 'C', value: 90 },
	{ subject: 'F', value: 88 },
]

export function RadarGraph() {
	const containerRef = useRef<HTMLDivElement>(null)
	const [radius, setRadius] = useState(0)
	const [activeIndex, setActiveIndex] = useState(0)

	const outerRadius = 0.8 // 80%

	// Высчитываем outerRadius в пикселях (например, 90% от меньшей стороны)
	useEffect(() => {
		const resize = () => {
			if (containerRef.current) {
				const { offsetWidth, offsetHeight } = containerRef.current
				const size = Math.min(offsetWidth, offsetHeight)
				setRadius(size * outerRadius * 0.5) // 90% от диаметра = радиус
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
								onChangeElement={(index: number) => setActiveIndex(index)}
								activeIndex={activeIndex}
							/>
						}
					/>
					<Radar
						name='Custom'
						dataKey='value'
						shape={
							<CustomRadarShape
								activeIndex={activeIndex}
								onChangeElement={(index: number) => setActiveIndex(index)}
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
