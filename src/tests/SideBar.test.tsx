import '@testing-library/jest-dom/vitest'
import userEvent from '@testing-library/user-event'
import SideBar from '../components/SideBar/SideBar'
import { describe, expect, it, vi } from 'vitest'
import { challenges } from '../data/challenges'
import { render, screen } from '@testing-library/react'

describe("Sidebar", () => {
    it("should list challenges", async () => {
        const setSelectedChallenge = vi.fn()
        render(<SideBar selectedChallenge={challenges[0]} setSelectedChallenge={setSelectedChallenge} />)

        const waitChallengeTitle = await screen.findByText(challenges[1].title)
        await userEvent.click(waitChallengeTitle)

        expect(setSelectedChallenge).toHaveBeenCalled()
    })

    it("should list all challenges", async () => {
        const setSelectedChallenge = vi.fn()
        render(<SideBar selectedChallenge={challenges[0]} setSelectedChallenge={setSelectedChallenge} />)
        for (let i = 0; i < challenges.length; i++) {
            const waitChallengeTitle = await screen.findByText(challenges[i].title)
            await userEvent.click(waitChallengeTitle)
        }
        expect(setSelectedChallenge).toHaveBeenCalledTimes(challenges.length)
    })
})