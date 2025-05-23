import { ProfileIcon } from '../../../../icons/ProfileIcon'
import { SecurityIcon } from '../../../../icons/SecurityIcon'
import { DefaultBlock } from '../../../default-block/DefaultBlock'
import styles from './analytics-stat.module.css'

export const AnalyticsStat = () => {
	return (
		<div className={styles.stat}>
			<DefaultBlock>
				<div className={styles.block}>
					<div className={styles.heading}>
						<SecurityIcon height={22} fill='rgba(38, 67, 84, 0.6)' />
						<h3>Доля в безопасности</h3>
					</div>
					<div className={styles.content}>
						<div className={styles.percent}>
							10<span>%</span>
						</div>
						<div className={styles.badge}>+2%</div>
					</div>
					<div className={styles.sum}>
						<span>+12 навыков </span>За последний месяц
					</div>
				</div>
			</DefaultBlock>

			<DefaultBlock>
				<div className={styles.block}>
					<div className={`${styles.heading} `}>
						<ProfileIcon height={22} fill='rgba(38, 67, 84, 0.6)' />
						<h3>Всего профилей</h3>
					</div>
					<div className={styles.content}>
						<div className={`${styles.percent} ${styles.light_blue}`}>24</div>
						<div className={styles.badge}>+2%</div>
					</div>
					<div className={styles.sum}>
						<span>+2 профиля </span>За последний месяц
					</div>
				</div>
			</DefaultBlock>
		</div>
	)
}
