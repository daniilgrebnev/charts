import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'
import { useAppSelector } from '../../../../../hooks'
import { XAxisTick, YAxisTick } from './Ticks'

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс', '']

export const MetricsChart = () => {
	const data = useAppSelector(state => state.data)

	// Явно проверяем, что activeId не undefined/null, а элемент найден
	const activeItem = data.items.find(item => item.id === data.activeId)
	const activeData = activeItem?.data

	if (!activeData) return null

	const chartData = weekDays.map((day, index) => ({
		name: day,
		uv: activeData[0][index],
		pv: activeData[1][index],
	}))

	return (
		<AreaChart
			width={730}
			height={250}
			data={chartData}
			style={{
				padding: '10 0 0 0',
			}}
		>
			<XAxis
				dataKey='name'
				tickLine={false}
				axisLine={false}
				tick={<XAxisTick arr={activeData[0]} />}
			/>
			<YAxis
				domain={[0, 100]}
				axisLine={false}
				tick={<YAxisTick />}
				tickLine={false}
				ticks={[0, 20, 40, 60, 80, 100]}
			/>
			<CartesianGrid stroke='#00000020' />

			<Area
				dataKey='pv'
				stroke='#566DA3'
				strokeWidth={2}
				fillOpacity={1}
				fill='none'
				dot={{ fill: '#566DA3', strokeWidth: 2, r: 3.5 }}
				connectNulls={false}
				isAnimationActive={false}
			/>
			<Area
				dataKey='uv'
				stroke='#F37D73'
				strokeWidth={2}
				fillOpacity={1}
				fill='none'
				isAnimationActive={false}
				dot={{ fill: '#F37D73', strokeWidth: 2, r: 4 }}
				connectNulls={false}
			/>
		</AreaChart>
	)
}
