// - provide a button that the person in charge can press every time there is a`strike`, `ball`, `foul` or`hit`.
// - there is ** NO ** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the`Display` component.
import React, { useState } from 'react'

const Dashboard = () => {
    /*========================States================================ */
    const [player, setPlayer] = useState([
        {
            name: "",
            strikes: 0,
            balls: 0,
            foul: 0,
            hit: true
        }
    ]);


    /*========================Functions================================ */
    const strike = () => {
        // Adds +1 to the display Strike counter
        // If Strikes total ever reaches 3 then reset both the Strikes and
        // and Ball counter to zero
    }

    const ball = () => {
        // Adds +1 to the display ball counter
        // If Ball total ever reaches 4 then reset both the Strikes and
        // and Ball counter to zero
    }

    const Foul = () => {
        // Foul ball is worth +1 strike expect when the current state of
        // strike is equal to 2 or greater, then it is worth 0 strikes
    }

    const Hit = () => {
        // If a hit occures the scores for Balls and Strikes should be set to Zero
    }

}