import { useQuery } from '@tanstack/react-query'
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
            queryKey: ['test', testPath],
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

    const renderCode = (code: string | undefined) => {
        if (!code) return null;

        return (
            <ol className="code-block">
                {code.split('\n').map((line, idx) => (
                    <li key={idx}>
                        <pre>{line}</pre>
                    </li>
                ))}
            </ol>
        )
    }

    return (
        <div className="wrapper">
            <section className="code">
                <h3>Test:</h3>
                <div className="scroll">
                    {renderCode(testCode)}
                </div>
            </section>

            <section className="code">
                <h3>Solution:</h3>
                <div className="scroll" >
                    {renderCode(solutionCode)}
                </div>
            </section>
        </div>
    )

}
export default CodeBlock
