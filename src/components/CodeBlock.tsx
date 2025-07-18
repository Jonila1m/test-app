import { useQuery } from "@tanstack/react-query"
import { CodeBlock as RCodeBlock } from 'react-code-blocks'

export type TProps = {
    solutionPath: string;
    testPath: string;
}

const sourceMap = (raw: string): string =>
    raw.replace(/\/\/# sourceMappingURL=.*$/gm, '')


const CodeBlock = ({ solutionPath, testPath }: TProps) => {

    const { data: testCode } = useQuery(
        {
            queryKey: ['challenge', testPath],
            queryFn: async () => {
                const response = await fetch(`../../public/tests/${testPath}`)
                const raw = await response.text()
                return sourceMap(raw)
            }
        }
    )

    const { data: solutionCode } = useQuery(
        {
            queryKey: ['solution', solutionPath],
            queryFn: async () => {
                const response = await fetch(`../../public/tests/${solutionPath}`)
                const raw = await response.text()
                return sourceMap(raw)
            }
        }

    )

    return (
        <div>
            <p>Test:</p>
            <RCodeBlock text={testCode} />
            <p>Solution:</p>
            <RCodeBlock text={solutionCode} />
        </div>
    )
}

export default CodeBlock
