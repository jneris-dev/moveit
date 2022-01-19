import styles from './styles.module.scss'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jneris-dev.png" alt="Profile Avatar" />
            <div>
                <strong>João Neris</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}