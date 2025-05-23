import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts'

export const MetricsChart = ({
	firstDataset,
	secondDataset,
}: {
	firstDataset: (number | undefined)[]
	secondDataset: (number | undefined)[]
}) => {
	// Лейблы для оси X (дни недели)
	const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
	const chartWidth = 730
	const dataCount = weekDays.length

	// Рассчитываем позиции вертикальных линий сетки

	// Формируем данные для графика
	const chartData = weekDays.map((day, index) => ({
		name: day,
		uv: firstDataset[index],
		pv: secondDataset[index],
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
				tick={<XAxisTick />}
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
			/>
			<Area
				dataKey='uv'
				stroke='#F37D73'
				strokeWidth={2}
				fillOpacity={1}
				fill='url(#colorUv)'
				dot={{ fill: '#F37D73', strokeWidth: 2, r: 4 }}
				connectNulls={false}
			/>
		</AreaChart>
	)
}

const YAxisTick = (props: any) => {
	const { x, y, payload } = props
	return (
		<text x={x - 15} fontSize={14} fill='#264354' y={y} dy={4} textAnchor='end'>
			{payload.value}%
		</text>
	)
}

const XAxisTick = (props: any) => {
	const { x, y, payload } = props
	return (
		<text
			x={x + 10}
			y={y + 15}
			dy={4}
			textAnchor='end'
			fontSize={14}
			fill='#264354'
		>
			{payload.value}
		</text>
	)
}
