import React from "react"
import { render, fireEvent } from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"

import Dashboard from './Dashboard'

it('display the count', () => {
    const { getByTestId, findAllByText } = render(<Dashboard />)

    const button = getByTestId(/strike/)

    fireEvent.click(button)
    findAllByText(/Strikes:0/)
})