import { useAppSelector } from '../../hooks'
import { ProjectManager } from '../../icons/ProjectManager'
import { DefaultBlock } from '../default-block/DefaultBlock'
import styles from './analytics.module.css'
import { AnalyticsChart } from './components/analytics-chart/AnalyticsChart'
import { AnalyticsProfs } from './components/analytics-profs/AnalyticsProfs'
import { AnalyticsStat } from './components/analytics-stat/AnalyticsStat'

export const Analytics = () => {
	const data = useAppSelector(state =>
		state.data.items.find(item => item.id == state.data.activeId)
	)
	return (
		<section className={styles.analytics}>
			<h1>Аналитика по сферам</h1>
			<div className={styles.project_manager}>
				<div className={styles.project_manager_icon}>
					<ProjectManager height={48} />
				</div>
				<div className={styles.project_manager_text}>
					<h2>{data?.title}</h2>
					<p>{data?.summary}</p>
				</div>
			</div>
			<DefaultBlock>
				<AnalyticsProfs />
			</DefaultBlock>
			<DefaultBlock>
				<AnalyticsChart />
			</DefaultBlock>
			<AnalyticsStat />
		</section>
	)
}
