import { useContext } from 'react';

import { ChallengesContext } from '../../context/ChallengeContext';

import styles from './styles.module.scss'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                {percentToNextLevel > 0 && <span style={{ left: `${percentToNextLevel}%` }}>{currentExperience} xp</span>}
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}