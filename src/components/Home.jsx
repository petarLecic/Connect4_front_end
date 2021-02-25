import { useHistory } from 'react-router-dom'
import { DivStyled, RouteBtnStyled, UserStyled } from '../StyledComponents'

const Home = ({ user, setUser }) => {
    const history = useHistory()
    return user ?
        <div>
            <DivStyled>
                <UserStyled>Hi {user.username}!</UserStyled>
                <RouteBtnStyled onClick={() => history.push("/play")}>Connect4</RouteBtnStyled>
                <RouteBtnStyled onClick={() => history.push("/rules")}>Rules</RouteBtnStyled>
                <RouteBtnStyled onClick={() => history.push("/myprofile")}>My Profile</RouteBtnStyled>
                <RouteBtnStyled onClick={() => setUser(null)}>Logout</RouteBtnStyled>
            </DivStyled>
        </div>
        :
        <DivStyled>
            <RouteBtnStyled onClick={() => history.push("/login")}>Login</RouteBtnStyled>
            <RouteBtnStyled onClick={() => history.push("/register")}>Register</RouteBtnStyled>
            <RouteBtnStyled onClick={() => history.push("/play")}>Connect4</RouteBtnStyled>
            <RouteBtnStyled onClick={() => history.push("/rules")}>Rules</RouteBtnStyled>
        </DivStyled>
    
}

export default Home