import { useState } from "react"
import { Redirect } from "react-router-dom"
import Grid from "./Grid"

const Game = ({ user }) => {
    const [player, setPlayer] = useState("rgb(163, 47, 53)")

    return user ?
        <>
            <h1 style={{margin: "3vw"}}>{player == 'rgb(163, 47, 53)' ? "Red's move" : "Blue's move"}</h1>
            <Grid player={player} setPlayer={setPlayer}/>
        </>
        :
        <Redirect to='/login' />
}

export default Game

// let move = {
//     player: 'red',
//     col: 3,
//     index: 3
// }

// function checkVertically(move) {
//     let count = 1
//     for (let i = move.index - 1; i >= 0; i--) {
//         if (arrays[move.col][i] == move.player) {
//             if (++count == 4) return win
//         }
//         else break
//     }
//     for (let i = move.index + 1; i < 6; i++) {
//         if (arrays[move.col][i] == move.player) {
//             if (++count == 4) return win
//         }
//         else break
//     }
    
// }

// function checkHorizontaly(move) {
//     let count = 1
//     for (let i = move.col - 1; i >= 0; i--) {
//         if (arrays[i][move.index] == move.player) {
//             if (++count == 4) return win
//         }
//         else break
//     }
//     for (let i = move.col + 1; i < 7 ; i++) {
//         if (arrays[i][move.index] == move.player) {
//             if (++count == 4) return win
//         }
//         else break
//     }
// }

// function checkLeftDiagonal(move) {
//     let count = 1
//     for (let i = move.col - 1; i >= 0; i--) {
//         if (arrays[i][i] == move.player) {
//             if (++count == 4) return win
//         }
//         else break
//     }
//     for (let i = move.col + 1; i < 7; i++) {
//         if (arrays[i][i] == move.player) {
//             if (++count == 4) return win
//         }
//         else break
//     }
// }

// function checkRightDiagonal(move) {
//     let count = 1
//     for (let i = move.col - 1, j = move.index + 1; i >= 0, j < 6; i--, j++) {
//         if (arrays[i][j] == move.player) {
//             if (++count == 4) return win
//         }
//         else break
//     }
//     for (let i = move.col + 1, j = move.index - 1; i < 7, j >= 0; i++, j--) {
//         if (arrays[i][j] == move.player) {
//             if (++count == 4) return win
//         }
//         else break
//     }
// }
