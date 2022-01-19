import Head from 'next/head';

import styles from '../styles/pages/Home.module.scss'

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompleteChallegens } from '../components/CompleteChallegens';
import { CountDown } from '../components/CountDown';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | move.it</title>
            </Head>

            <ExperienceBar />

            <section>
                <aside className={styles.leftContainer}>
                    <Profile />
                    <CompleteChallegens />
                    <CountDown />
                </aside>
                <aside></aside>
            </section>
        </div>
    )
}
