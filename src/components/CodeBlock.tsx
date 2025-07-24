import { useQuery } from '@tanstack/react-query'
import { CodeBlock as RCodeBlock, dracula } from 'react-code-blocks'
import './CodeBlock.css'


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
                const response = await fetch(`/public/tests/${testPath}`)
                const raw = await response.text()
                return sourceMap(raw)
            }
        }
    )
    const { data: solutionCode } = useQuery(
        {
            queryKey: ['solution', solutionPath],
            queryFn: async () => {
                const response = await fetch(`/public/tests/${solutionPath}`)
                const raw = await response.text()
                return sourceMap(raw)
            }
        }

    )
    return (
        <div className="wrapper">
            <section className="code">
                <h3>Test:</h3>
                <div className="scroll">
                    <RCodeBlock text={testCode} language="tsx" theme={dracula} />
                </div>
            </section>

            <section className="code">
                <h3>Solution:</h3>
                <div className="scroll">
                    <RCodeBlock text={solutionCode} language="tsx" theme={dracula} />
                </div>
            </section>
        </div>
    )
}
export default CodeBlock

