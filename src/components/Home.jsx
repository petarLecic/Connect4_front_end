import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import logo from ''

const StyledBtn = styled.button`
    margin: 10px 10px;
    padding: 10px;
    background: rgb(101, 182, 190);
    color: white;
    font-family: sans-serif;
    font-size: 2vw;
    text-shadow: 1px 2px black;
    &:hover{
        background: rgb(163, 47, 53)
    }
`

const Home = () => {
    const history = useHistory()
    return (
        <div>
            <img src={logo} alt="c4 logo"/>
            <StyledBtn onClick={() => history.push("/login")}>Login</StyledBtn>
            <StyledBtn onClick={() => history.push("/register")}>Register</StyledBtn>
            <StyledBtn onClick={() => history.push("/play")}>Connect4</StyledBtn>
            <StyledBtn onClick={() => history.push("/rules")}>Rules</StyledBtn>
        </div>
    )
}

export default Home