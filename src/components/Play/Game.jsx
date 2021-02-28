import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { didWin } from "./checkWinFunctions"
import Grid from "./Grid"
import { StyledGame } from "./StyledGame"

const Game = ({ user }) => {
    const [player, setPlayer] = useState(Math.random() > 0.5 ? 'blue' : 'red')
    const [columns, setColumns] = useState(new Array(7).fill(new Array(6).fill(undefined)))
    const [moveObj, setMoveObj] = useState({})
    const [moveCounter, setMoveCounter] = useState(0)

    useEffect(() => {
        if (didWin(moveObj, columns)) alert(`${moveObj.player} wins!`)
        else if(moveCounter == 42) alert('It\'s a tie!')
    }, [moveObj])

    return user ?
        <StyledGame>
            <h1>{player == 'red' ? "Red is playing" : "Blue is playing"}</h1>
            <Grid 
                player={player} 
                setPlayer={setPlayer} 
                columns={columns} 
                setColumns={setColumns} 
                setMoveObj={setMoveObj}
                setMoveCounter={setMoveCounter}
            />
            <button 
                onClick={() => {
                    setColumns(new Array(7).fill(new Array(6).fill(undefined)))
                    setMoveCounter(0)
                }}
            >
                Reset
            </button>
        </StyledGame>
        :
        <Redirect to='/login' />
}

export default Game


