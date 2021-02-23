import { Redirect } from "react-router-dom"

const Game = ({ user }) => {
    console.log(user);
    return user ?
        <h1>Game</h1>
        :
        <Redirect to='/login' />
}

export default Game