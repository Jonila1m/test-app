import { challenges, TChallenge } from '../../data/challenges'
import './SideBar.css'

type TProps = {
    selectedChallenge: TChallenge
    setSelectedChallenge: React.Dispatch<React.SetStateAction<TChallenge>>
}

const SideBar = ({ selectedChallenge, setSelectedChallenge }: TProps) => {
    return (
        <div className="sidebar">
            <h1>Challenge List</h1>
            <ul>
                {challenges.map(challenge => {
                    return (
                        <li className={`list-item ${challenge.id === selectedChallenge.id ? 'active' : ''}`}
                            key={challenge.id}
                            onClick={() => setSelectedChallenge(challenge)}
                        >
                            {challenge.title}
                        </li>
                    )
                }
                )}
            </ul>
        </div>
    )
}

export default SideBar
