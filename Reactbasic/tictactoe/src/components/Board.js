import React from 'react'
import Square from './Square'


export default function Board() {
    return (
    <div>
        <div className="board-row">
            {/*Self closing syntax is called jssx syntax*/}
            <Square/>
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
