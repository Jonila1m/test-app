import { TChallenge } from '../data/challenges'
import CodeBlock from './CodeBlock'

type TProps = {
    selectedChallenge: TChallenge
}

const ChallengeDetails = ({ selectedChallenge }: TProps) => {

    return (
        <CodeBlock
            testPath={selectedChallenge.testPath}
            solutionPath={selectedChallenge.solutionPath}
        />
    )
}

export default ChallengeDetails
