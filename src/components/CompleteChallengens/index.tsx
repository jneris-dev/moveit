import { useContext } from 'react';

import { ChallengesContext } from '../../context/ChallengeContext';

import styles from './styles.module.scss';

export function CompleteChallengens() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.completeChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}