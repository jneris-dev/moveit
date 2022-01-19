import { useContext } from 'react';

import { ChallengesContext } from '../../context/ChallengeContext';

import styles from './styles.module.scss'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/jneris-dev.png" alt="Profile Avatar" />
            <div>
                <strong>João Neris</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}