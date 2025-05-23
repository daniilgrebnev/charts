import type { TIcon } from '../types/icons'

export const ExitIcon = (props: TIcon) => {
	return (
		<svg
			{...props}
			viewBox='0 0 17 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M6 7.5L16 7.5M16 7.5L12.6346 4.5M16 7.5L12.6346 10.5'
				stroke={props.fill}
				stroke-opacity='0.8'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
			<path
				d='M1 9.83333L1 5.16667C1 2.96678 1 1.86683 1.73223 1.18342C2.46447 0.5 3.64298 0.5 6 0.5M6 14.5C3.64298 14.5 2.46447 14.5 1.73223 13.8166C1.4824 13.5834 1.31781 13.3017 1.20938 12.9444'
				stroke={props.fill}
				stroke-opacity='0.8'
				stroke-linecap='round'
				stroke-linejoin='round'
			/>
		</svg>
	)
}
