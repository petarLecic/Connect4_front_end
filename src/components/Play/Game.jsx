import { useEffect, useState } from "react"
import { Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { didWin } from "./checkWinFunctions"
import Grid from "./Grid"
import { StyledGame } from "./StyledGame"

const Game = ({ user }) => {
    const history = useHistory()
    const [player, setPlayer] = useState(Math.random() > 0.5 ? 'Blue' : 'Red')
    const [columns, setColumns] = useState(new Array(7).fill(new Array(6).fill(undefined)))
    const [message, setMessage] = useState('')
    const [moveObj, setMoveObj] = useState({})
    const [movesCounter, setMovesCounter] = useState(0)

    useEffect(() => {
        if (didWin(moveObj, columns)) setMessage(`${moveObj.player} wins!`)
        else if(movesCounter == 42) setMessage('It\'s a tie!')
    }, [moveObj])

    function move(index) {
        if (message) return
        setMovesCounter(prev => prev + 1)
        let tmp = JSON.parse(JSON.stringify(columns)) // Deep cloning columns (converts undefined to null)
        const i = tmp[index].findIndex(el => typeof el == 'object') // typeof null is object
        if (i == -1) return
        tmp[index][i] = player
        setColumns(tmp)
        setMoveObj({player, col: index, index: i})
        setPlayer(prev => prev == 'Red' ? 'Blue' : 'Red')
    }

    let messageBackground
    if (message.includes('Blue')) messageBackground = 'rgb(101, 182, 190)'
    else if (message.includes('Red')) messageBackground = 'rgb(163, 47, 53)'
    else if (message.includes('tie')) messageBackground = 'rgb(152, 154, 156)'


    return (
        <StyledGame>
            <h1 style={message ? {background: messageBackground} : null}>
                {message ? message : player == 'Red' ? "Red is playing" : "Blue is playing"}
            </h1>
            <Grid columns={columns} move={move}/>
            <button 
                onClick={() => {
                    setColumns(new Array(7).fill(new Array(6).fill(undefined)))
                    setMovesCounter(0)
                    setMessage('')
                }}
            >
                Reset
            </button>
            <button onClick={() => history.push('/')}>Back</button>
        </StyledGame>
    )
}

export default Game


