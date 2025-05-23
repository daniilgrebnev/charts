import { ProjectManager } from '../../icons/ProjectManager'
import { DefaultBlock } from '../default-block/DefaultBlock'
import styles from './analytics.module.css'
import { AnalyticsChart } from './components/analytics-chart/AnalyticsChart'
import { AnalyticsProfs } from './components/analytics-profs/AnalyticsProfs'

export const Analytics = () => {
	return (
		<section className={styles.analytics}>
			<h1>Аналитика по сферам</h1>
			<div className={styles.project_manager}>
				<div className={styles.project_manager_icon}>
					<ProjectManager height={48} />
				</div>
				<div className={styles.project_manager_text}>
					<h2>Менеджер проектов</h2>
					<p>
						Основные сферы человеческой деятельности: экономическая,
						политическая, социальная, и духовная. Выделяются четыре основные
						подсистемы общественной жизни, которые охватывают различные сферы
						человеческой активности.
					</p>
				</div>
			</div>
			<DefaultBlock>
				<AnalyticsProfs />
			</DefaultBlock>
			<DefaultBlock>
				<AnalyticsChart />
			</DefaultBlock>
		</section>
	)
}
