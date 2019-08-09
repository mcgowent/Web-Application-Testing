// - provide a button that the person in charge can press every time there is a`strike`, `ball`, `foul` or`hit`.
// - there is ** NO ** need to specify the type of hit (single, double, etc).
// - changes recorded on this component should update the information shown by the`Display` component.

import React from 'react'



class Dashboard extends React.Component {
    /*========================States================================ */
    constructor() {
        super()
        this.state =
            {
                strikes: 0,
                balls: 0,
                fouls: 0,
                hit: true
            }
    }

    /*========================Methods================================ */
    strike = () => {
        this.setState(state => ({
            strikes: state.strikes + 1
        }))
        return this.state.strike
        // Adds +1 to the display Strike counter
        // If Strikes total ever reaches 3 then reset both the Strikes and
        // and Ball counter to zero
    }

    ball = (e) => {
        this.setState(state => ({
            balls: state.balls + 1
        }))
        // Adds +1 to the display ball counter
        // If Ball total ever reaches 4 then reset both the Strikes and
        // and Ball counter to zero
    }

    foul = (e) => {
        this.setState(state => ({
            fouls: state.fouls + 1
        }))
        // Foul ball is worth +1 strike expect when the current state of
        // strike is equal to 2 or greater, then it is worth 0 strikes
    }

    hit = (e) => {
        this.setState(state => ({
            hit: !state.hit
        }))
        // If a hit occures the scores for Balls and Strikes should be set to Zero
    }

    render() {
        return (
            <div>
                <button onClick={this.strike} data-testid="strike">Strike</button>
                <p>Strikes:{this.state.strikes}</p>
                <button onClick={this.ball}>Ball</button>
                <p>{this.state.balls}</p>
                <button onClick={this.foul}>Foul</button>
                <p>{this.state.fouls}</p>
                <button onClick={this.hit}>{this.state.hit ? 'True' : 'False'}</button>
                {console.log(this.state.hit)}
                <p></p>
            </div>
        )
    }
}

export default Dashboard;