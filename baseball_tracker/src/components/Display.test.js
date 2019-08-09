import React from 'react'
import { render } from '@testing-library/react'
import Display from './Display'

describe('<Display />', () => {
    it('it renders without crashing', () => {
        render(<Display />)
    })
    it('props work', () => {
        const display = render(<Display strikes={2} balls={3} />)
        display.getByText(/Strikes: 2/)
        display.getByText(/Balls: 3/)
    })
    it('props work', () => {
        const display = render(<Display strikes={1} balls={2} />)
        display.getByText(/Strikes: 1/)
        display.getByText(/Balls: 2/)
    })
    it('props work', () => {
        const display = render(<Display strikes={-1} balls={20} />)
        display.getByText(/Strikes: -1/)
        display.getByText(/Balls: 20/)
    })
})