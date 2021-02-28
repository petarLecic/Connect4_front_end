import { useHistory } from 'react-router-dom'
import { StyledHome } from './StyledHome'

const Home = ({ user, setUser }) => {
    const history = useHistory()

    return user ?
        <StyledHome>
            <h1>Hi {user.username}!</h1>
            <button onClick={() => history.push("/play")}>Play</button>
            <button onClick={() => history.push("/rules")}>Rules</button>
            <button onClick={() => history.push("/myprofile")}>My Account</button>
            <button onClick={() => setUser(null)}>Logout</button>
        </StyledHome>
        :
        <StyledHome>
            <h1>Connect 4</h1>
            <button onClick={() => history.push("/login")}>Login</button>
            <button onClick={() => history.push("/register")}>Register</button>
            <button onClick={() => history.push("/play")}>Play</button>
            <button onClick={() => history.push("/rules")}>Rules</button>
        </StyledHome>
    
}

export default Home