import { useState } from 'react'
import SideBar from './components/SideBar/SideBar'
import { challenges, TChallenge } from './data/challenges'

const App = () => {
  const [selectedChallenge, setSelectedChallenge] = useState<TChallenge>(challenges[0])

  return (
    <div>
      <SideBar
        selectedChallenge={selectedChallenge}
        setSelectedChallenge={setSelectedChallenge}
      />

      <main style={{ paddingLeft: '20rem', color: 'white', margin: '10rem 2rem 0 2rem' }}>
        <h2>{'Title: ' + selectedChallenge.title}</h2>
        <p>{selectedChallenge.description}</p>
      </main>
    </div>
  )
}

export default App
