import Head from 'next/head';

import styles from '../styles/pages/Home.module.scss'

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompleteChallengens } from '../components/CompleteChallengens';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountDownProvider } from '../context/CountDownContext';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | move.it</title>
            </Head>

            <ExperienceBar />

            <CountDownProvider>
                <section>
                    <aside className={styles.leftContainer}>
                        <Profile />
                        <CompleteChallengens />
                        <CountDown />
                    </aside>
                    <div>
                        <ChallengeBox />
                    </div>
                </section>
            </CountDownProvider>
        </div>
    )
}
