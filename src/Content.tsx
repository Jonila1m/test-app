import { useState } from "react"
import { TChallenge, challenges } from "./data/challenges"
import SideBar from './components/SideBar/SideBar'
import ChallengeDetails from "./components/ChallengeDetails"

const Content = () => {
    const [selectedChallenge, setSelectedChallenge] = useState<TChallenge>(challenges[0])
    return (
        <div>
            <header className="app-header">
                <h1 className="app-header__title">Test App</h1>
            </header>
            <SideBar
                selectedChallenge={selectedChallenge}
                setSelectedChallenge={setSelectedChallenge}
            />

            <main style={{ paddingLeft: '20rem', color: 'white', margin: ' 0 2rem' }}>
                <h2>{selectedChallenge.title}</h2>
                <p style={{ fontWeight: 'lighter' }}>{selectedChallenge.description}</p>
                <p>Test Code</p>
                <ChallengeDetails selectedChallenge={selectedChallenge} />
            </main>
        </div >
    )
}
export default Content

