import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it('renders without crashing', () => {
        render(<Dashboard />)
    })
    it('strike check', () => {
        let clicked = false
        const { getByText } = render(<Dashboard strike={() => clicked = true} />)
        const downButton = getByText(/Strike/)
        fireEvent.click(downButton)
        expect(clicked).toBe(true)
    })
    it('strike check with mocked function', () => {
        const click = jest.fn()
        const { getByText } = render(<Dashboard strike={click} />)
        const downButton = getByText(/strike/i)
        fireEvent.click(downButton)
        expect(click).toBeCalled()
    })
    it('ball check with mocked function', () => {
        const click = jest.fn()
        const { getByText } = render(<Dashboard ball={click} />)
        const downButton = getByText(/ball/i)
        fireEvent.click(downButton)
        expect(click).toBeCalled()
    })
    it('Foul check with mocked function', () => {
        const click = jest.fn()
        const { getByText } = render(<Dashboard foul={click} />)
        const downButton = getByText(/foul/i)
        fireEvent.click(downButton)
        expect(click).toBeCalled()
    })
    it('Hit check with mocked function', () => {
        const click = jest.fn()
        const { getByText } = render(<Dashboard hit={click} />)
        const downButton = getByText(/hit/i)
        fireEvent.click(downButton)
        expect(click).toBeCalled()
    })
})