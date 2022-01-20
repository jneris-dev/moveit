import Head from 'next/head';
import { GetServerSideProps } from 'next';

import styles from '../styles/pages/Home.module.scss';

import { CountDownProvider } from '../context/CountDownContext';
import { ChallengesProvider } from '../context/ChallengeContext';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompleteChallengens } from '../components/CompleteChallengens';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
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
        </ChallengesProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}
