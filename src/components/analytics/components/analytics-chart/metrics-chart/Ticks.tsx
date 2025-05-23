export const YAxisTick = (props: any) => {
	const { x, y, payload } = props
	return (
		<text x={x - 15} fontSize={14} fill='#264354' y={y} dy={4} textAnchor='end'>
			{payload.value}%
		</text>
	)
}

export const XAxisTick = (props: any) => {
	const { x, y, payload, arr, index } = props

	if (!payload.value.length) return null

	const currentValue = arr[index]
	const prevValue = index > 0 ? arr[index - 1] : currentValue
	const difference = currentValue - prevValue
	const hasValue = currentValue !== undefined

	const getIndicator = () => {
		if (!hasValue) return null

		if (difference > 0) {
			return (
				<>
					<path
						transform='translate(-20, 25)'
						d='M6 0L11.1962 9H0.803848L6 0Z'
						fill='#369F48'
					/>
					<text x={25} y={35} fontSize={14} fill='#369F48' textAnchor='end'>
						+{difference}
					</text>
				</>
			)
		}

		if (difference < 0) {
			return (
				<>
					<path
						transform='translate(-20, 25) rotate(180 6 4.5)'
						d='M6 0L11.1962 9H0.803848L6 0Z'
						fill='#F37D73'
					/>
					<text x={25} y={35} fontSize={14} fill='#F37D73' textAnchor='end'>
						{difference}
					</text>
				</>
			)
		}

		return (
			<line x1={-10} y1={30} x2={10} y2={30} stroke='#ccc' strokeWidth={1} />
		)
	}

	return (
		<g transform={`translate(${x},${y})`}>
			<text x={10} y={15} dy={4} textAnchor='end' fontSize={14} fill='#264354'>
				{payload.value}
			</text>
			{getIndicator()}
		</g>
	)
}
