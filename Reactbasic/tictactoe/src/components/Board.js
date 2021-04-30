import React from 'react'
import Square from './Square'

// Mechanism of passing data is called Props
export default function Board(props) {
    return (
    <div>
        <div className="board-row">
            {/*Self closing syntax is called jssx syntax*/}
            <Square insidevalue={props.value}/>
            <Square/>
            <Square/>
        </div>
            <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
        </div>
        <div className="board-row">
            <Square/>
            <Square/>
            <Square/>
        </div>
    </div>
    )
}
