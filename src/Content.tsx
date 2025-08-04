import { useState } from "react"
import { TChallenge, challenges } from "./data/challenges"
import SideBar from './components/SideBar/SideBar'
import ChallengeDetails from "./components/ChallengeDetails"
import './Content.css'

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

            <main>
                <h2>{selectedChallenge.title}</h2>
                <p>{selectedChallenge.description}</p>
                <ChallengeDetails selectedChallenge={selectedChallenge} />
            </main>
        </div >
    )
}
export default Content

