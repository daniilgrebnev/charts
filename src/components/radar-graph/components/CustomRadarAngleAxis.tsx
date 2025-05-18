export const CustomRadarAngleAxis = ({
	cx,
	cy,
	payload,
	radius,
	activeIndex,
	index,
	onChangeElement,
}: any) => {
	// Радиус должен быть точно таким же, как `outerRadius` в RadarChart
	const outerRadius = radius // <- ВАЖНО: должен соответствовать outerRadius="90%" как пиксельное значение
	const angle = payload.coordinate
	const radians = (Math.PI / 180) * angle

	// Вычисляем позицию по кругу
	const x = cx + outerRadius * Math.cos(-radians)
	const y = cy + outerRadius * Math.sin(-radians)

	return (
		<g
			onClick={() => onChangeElement(index)}
			style={{
				cursor: 'pointer',
			}}
			transform={`translate(${x}, ${y})`}
		>
			{index == activeIndex ? (
				<circle r={12} fill='#F37D73' strokeWidth={2} stroke='white' />
			) : (
				<circle r={12} fill='white' stroke='#ADADAD' />
			)}
		</g>
	)
}
