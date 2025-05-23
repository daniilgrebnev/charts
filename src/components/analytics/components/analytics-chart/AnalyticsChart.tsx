import styles from './analytics-chart.module.css'
import { MetricsChart } from './metrics-chart/MetricsChart'

export const AnalyticsChart = () => {
	return (
		<div className={styles.analytics_chart}>
			<div className={styles.heading}>
				<div className={styles.heading_text}>
					<h3>
						Заголовок метрики
						<span></span>
					</h3>
					<p>Подзаголовок</p>
				</div>
				<div className={styles.heading_variants}>
					<div className={styles.variant_active}>Вариант</div>
					<div className=''>Вариант</div>
					<div className=''>Вариант</div>
				</div>
			</div>
			<div className={styles.chart}>
				<MetricsChart />
			</div>
		</div>
	)
}
