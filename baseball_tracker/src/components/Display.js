import React from "react"

const Display = (props) => {
    return (
        <div className="score">
            <span>Strikes: {props.strikes}</span>
            <span>Balls: {props.balls}</span>
        </div>
    )
}

export default Display