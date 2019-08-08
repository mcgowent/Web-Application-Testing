// - provide a button that the person in charge can press every time there is a`strike`, `ball`, `foul` or`hit`.
// - there is ** NO ** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the`Display` component.

import React, { useState } from 'react'
import App from '../../../../React-Github-User-Card/github-cards/src/App';



class Dashboard extends React.Component {
    /*========================States================================ */
    constructor() {
        super()
        this.state = {
            player: [{
                name: "",
                strikes: 0,
                balls: 0,
                foul: 0,
                hit: true
            }]
        }
    }

    /*========================Methods================================ */
    strike = (e) => {
        // Adds +1 to the display Strike counter
        // If Strikes total ever reaches 3 then reset both the Strikes and
        // and Ball counter to zero


    }

    ball = (e) => {
        // Adds +1 to the display ball counter
        // If Ball total ever reaches 4 then reset both the Strikes and
        // and Ball counter to zero
    }

    foul = (e) => {
        // Foul ball is worth +1 strike expect when the current state of
        // strike is equal to 2 or greater, then it is worth 0 strikes
    }

    hit = (e) => {
        // If a hit occures the scores for Balls and Strikes should be set to Zero
    }
    render() {
        return (
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        )
    }

}

export default App;