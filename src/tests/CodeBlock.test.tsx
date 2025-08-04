import CodeBlock from "../components/CodeBlock";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from '@testing-library/react'

vi.mock('@tanstack/react-query', () => ({
    useQuery: vi.fn().mockReturnValue({ data: "mocked data" })
}))

describe("CodeBlock", () => {
    it("should render mocked test data ", () => {
        render(<CodeBlock
            testPath="mock-test.tsx"
            solutionPath="mock-solution.tsx" />)

        const mockedData = screen.getAllByText('mocked data')

        screen.debug()

        mockedData.forEach(mocked => {
            expect(mocked).toBeInTheDocument()
        })
    })
})
