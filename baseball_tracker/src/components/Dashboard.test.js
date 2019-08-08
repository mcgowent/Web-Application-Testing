import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'


import { strike, ball, foul, hit } from './Dashboard'

describe('Dashboard.js', () => {

    describe('strike()', () => {
        it('Should Add +1 on event trigger', () => {

            expect(strike(0)).toBe(1)
        })
    })
})




// describe('<Players />', () => {
//     it('should render a list of players provided on props', () => {
//         const playersData = [{
//             name: "PlayerOne",
//             strikes: 2,
//             balls: 1,
//             foul: 1,
//             hit: false
//         }
//         ]
//         const comp = render(<Dashboard player={playersData} />)

//         const players = comp.getAllByTestId('player')

//         expect(players).toHaveLength(playersData.length)
//     })
// })