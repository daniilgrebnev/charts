export const CustomRadarShape = (props: any) => {
	const { points, angleAxis, activeIndex, onChangeElement, radius } = props
	const { cx, cy } = angleAxis
	console.log(props)
	const activeElement = points[activeIndex]
	const otherElements = points.filter((_: any, i: any) => i !== activeIndex)

	// Найдем максимальный радиус графика (расстояние до самой дальней точки)

	const renderPoint = (p: any, index: number, isActive: boolean) => {
		const dx = p.x - cx
		const dy = p.y - cy
		const angleRad = Math.atan2(dy, dx)
		const angleDeg = (angleRad * 180) / Math.PI - 270

		// Расстояние от центра до точки
		const length = Math.sqrt(dx * dx + dy * dy)

		const tipY = -length // Вершина наверху, основание — внизу

		// Координаты точки на максимальном значении (100%)
		const maxX = cx + (dx / length) * radius
		const maxY = cy + (dy / length) * radius

		const min = -25
		const max = 100
		const scale = radius / (max - min)
		const radiusAtZero = (0 - min) * scale

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
		M -${radiusAtZero * 1.15} 0
		C -60 ${tipY * 0.4}, -30 ${tipY * 1.1}, 0 ${tipY}
		C 30 ${tipY * 1.1}, 60 ${tipY * 0.4}, ${radiusAtZero * 1.17} 0
		Z
	`}
						fill={isActive ? '#F8AAA4' : 'rgba(115, 195, 243, 0.1)'}
					/>
				</g>

				{/* Центральный круг и текст */}
				{isActive && (
					<g>
						<line
							x1={p.x}
							y1={p.y}
							x2={maxX} // Конечная точка на максимальном значении (100%), но не дальше границ
							y2={maxY}
							stroke='#F37D73'
							strokeWidth={2}
						/>

						<circle
							cx={cx}
							cy={cy}
							r={radiusAtZero}
							fill='white'
							stroke='#F8AAA4'
							strokeWidth={radiusAtZero / 3}
						/>
						<circle
							cx={cx}
							cy={cy}
							r={60}
							fill='none'
							filter='drop-shadow(20px #000)'
						/>
						<text
							x={cx}
							y={cy + 8}
							textAnchor='middle'
							fontSize='clamp(16px, 2.5vw, 28px)'
							fontWeight={600}
							fill='#2A3A4B'
						>
							{`${p.payload?.value}%`}
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
