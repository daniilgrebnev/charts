import { BellIcon } from '../../icons/BellIcon'
import { ExitIcon } from '../../icons/ExitIcon'
import { LogoIcon } from '../../icons/LogoIcon'
import { MenuIcon } from '../../icons/MenuIcon'
import { Settings } from '../../icons/Settings'
import profile_image from '../../images/smiling-man.png'
import styles from './header.module.css'

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header_content}>
					<div className={styles.logo}>
						<LogoIcon />
						<MenuIcon
							height={31}
							width={31}
							fill='#264354'
							className={styles.icon}
						/>
					</div>
					<div className={styles.account}>
						<div className={styles.bell_account}>
							<BellIcon height={31} fill='#264354' className={styles.icon} />
							<div className={styles.profile}>
								<img src={profile_image} alt='' />
								<div className={styles.profile_data}>
									<h4>Смирнов Андрей</h4>
									<p>Менеджер проектов</p>
								</div>
							</div>
						</div>
						<div className={styles.account_exit_settings}>
							<Settings
								height={31}
								width={31}
								fill='#264354'
								className={styles.icon}
							/>
							<ExitIcon
								height={31}
								width={31}
								fill='#264354'
								className={styles.icon}
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
