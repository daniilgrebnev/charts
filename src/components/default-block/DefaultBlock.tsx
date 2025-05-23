import styles from './default-block.module.css'

export const DefaultBlock = ({ children }: { children: React.ReactNode }) => {
	return <div className={styles.default_block}>{children}</div>
}
