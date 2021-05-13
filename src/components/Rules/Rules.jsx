import { useHistory } from "react-router-dom"
import { StyledRules } from "./StyledRules"

const Rules = () => {
    const history = useHistory()
    return (
        <StyledRules>
            <h1>Rules</h1>
            <p>
                The Connect 4 Board Game Rules are easy to understand. In fact, it is in the name. To win Connect Four, all you have to do is connect four of your colored checker pieces in a row, much the same as tic tac toe. This can be done horizontally, vertically or diagonally. Each player will drop in one checker piece at a time. This will give you a chance to either build your row, or stop your opponent from getting four in a row.
            </p>
            <p>
                The game is over either when you or your opponent reaches four in a row, or when all forty two slots are filled, ending in a stalemate. If you and your opponent decide to play again, the loser typically goes first.
            </p>
            <p>
                The rules of the game are easy to learn, but difficult to master. That is the beauty of Connect Four. Now that you know the Connect 4 board game rules, now is the time to challenge everyone you know. No matter their age or skill level, they can play this game with you. Now that you understand the rules, share Connect Four with everyone around you. You’ll be glad you did.
            </p>
            <button onClick={() => history.push('/play')}>Play</button>
            <button onClick={() => history.push('/')}>Back</button>
        </StyledRules>
    )
}

export default Rules