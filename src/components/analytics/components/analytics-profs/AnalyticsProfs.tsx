import { useAppSelector } from '../../../../hooks'
import styles from './analytics-profs.module.css'

const getColor = (percent: number) => {
	if (percent <= 33) {
		return { color: 'red', message: 'низком' }
	} else if (percent <= 66) {
		return { color: 'yellow', message: 'среднем' }
	} else {
		return { color: 'green', message: 'высоком' }
	}
}

export const AnalyticsProfs = () => {
	const data = useAppSelector(state => state.data)

	const activeItem = data.items.find(item => item.id === data.activeId)
	const percent = activeItem
		? activeItem.data[0][activeItem.data[0].length - 1]
		: undefined
	if (percent == undefined) return
	return (
		<div className={styles.analytics_profs}>
			<div className={styles.analytics_profs_heading}>
				<h3>Профессионализм пользователей в сфере</h3>
				<p>
					Посчитали на сколько пользователи качественно изучают сферу
					деятельности
				</p>
			</div>
			<div className={styles.analytics_profs_sum}>
				<div
					className={`${styles.analytics_profs_sum_percent} ${
						styles[getColor(percent).color]
					}`}
				>
					{percent}%
				</div>
				<div className={styles.analytics_profs_summary}>
					Профессионализм находится на{' '}
					<span className={styles[getColor(percent).color]}>
						{getColor(percent).message}{' '}
					</span>
					уровне.
					<br />
					{getColor(percent).color == 'green'
						? 'Отличный результат! Продолжайте в том же духе!'
						: 'Проработайте траекторию чтобы достичь более высоких результатов!'}
				</div>
			</div>
		</div>
	)
}
