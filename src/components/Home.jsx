import { useHistory } from 'react-router-dom'
import { RouteBtnStyled, RoutesDivStyled } from '../StyledComponents'

const Home = () => {
    const history = useHistory()
    return (
        <RoutesDivStyled>
            <RouteBtnStyled onClick={() => history.push("/login")}>Login</RouteBtnStyled>
            <RouteBtnStyled onClick={() => history.push("/register")}>Register</RouteBtnStyled>
            <RouteBtnStyled onClick={() => history.push("/play")}>Connect4</RouteBtnStyled>
            <RouteBtnStyled onClick={() => history.push("/rules")}>Rules</RouteBtnStyled>
        </RoutesDivStyled>
    )
}

export default Home