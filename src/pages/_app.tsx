import { ChallengesProvider } from '../context/ChallengeContext'

import '../styles/index.scss'

function MyApp({ Component, pageProps }) {
    return (
        <ChallengesProvider>
            <Component {...pageProps} />
        </ChallengesProvider>
    )
}

export default MyApp
