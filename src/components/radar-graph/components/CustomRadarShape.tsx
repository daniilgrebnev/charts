export const CustomRadarShape = ({
	points,
	angleAxis,
	activeIndex,
	onChangeElement,
}: any) => {
	const { cx, cy } = angleAxis

	const activeElement = points[activeIndex]
	const otherElements = points.filter((_: any, i: any) => i !== activeIndex)

	const renderPoint = (p: any, index: number, isActive: boolean) => {
		const dx = p.x - cx
		const dy = p.y - cy
		const angleRad = Math.atan2(dy, dx)
		const angleDeg = (angleRad * 180) / Math.PI - 270

		// Расстояние от центра до точки
		const length = Math.sqrt(dx * dx + dy * dy)

		const tipX = 0
		const tipY = -length // Вершина наверху, основание — внизу

		const value = p.payload?.value || 0

		return (
			<g
				key={index}
				style={{ cursor: 'pointer' }}
				onClick={() => onChangeElement(index)}
			>
				{/* Лепесток */}
				<g transform={`translate(${cx},${cy}) rotate(${angleDeg})`}>
					<path
						d={`
		M -60 0
		C -60 ${tipY * 0.4}, -30 ${tipY * 1.1}, 0 ${tipY}
		C 30 ${tipY * 1.1}, 60 ${tipY * 0.4}, 60 0
		Z
	`}
						fill={isActive ? '#F8AAA4' : 'rgba(115, 195, 243, 0.1)'}
					/>
				</g>

				{/* Центральный круг и текст */}
				{isActive && (
					<g>
						<circle
							cx={cx}
							cy={cy}
							r={50}
							fill='white'
							stroke='#F8AAA4'
							strokeWidth={20}
						/>
						<circle
							cx={cx}
							cy={cy}
							r={50}
							fill='none'
							filter='url(#circle-shadow)'
						/>
						<text
							x={cx}
							y={cy + 8}
							textAnchor='middle'
							fontSize={24}
							fontWeight='bold'
							fill='#2A3A4B'
						>
							{`${value}%`}
						</text>
					</g>
				)}

				{/* Конечная точка */}
				<circle
					cx={p.x}
					cy={p.y}
					r={8}
					fill={isActive ? '#fff' : '#73C3F3'}
					stroke={isActive ? '#F37D73' : 'white'}
					strokeWidth={isActive ? 4 : 2}
				/>
			</g>
		)
	}

	return (
		<>
			<circle cx={cx} cy={cy} r={6} fill='red' stroke='white' strokeWidth={2} />

			{/* Сначала отрисуем все НЕактивные */}
			{otherElements.map((p: any, index: number) =>
				renderPoint(p, index < activeIndex ? index : index + 1, false)
			)}

			{/* Активный отрисуем ПОСЛЕДНИМ, чтобы он был сверху */}
			{activeElement && renderPoint(activeElement, activeIndex, true)}
		</>
	)
}
