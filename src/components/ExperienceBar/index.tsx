import styles from './styles.module.scss'

export function ExperienceBar() {
    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: '50%' }} />
                <span style={{ left: '50%' }}>300 xp</span>
            </div>
            <span>600 xp</span>
        </header>
    );
}