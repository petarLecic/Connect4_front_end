import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledBtn = styled.button`
    margin: 1vw 1vw;
    padding: 1vw;
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
            <StyledBtn onClick={() => history.push("/login")}>Login</StyledBtn>
            <StyledBtn onClick={() => history.push("/register")}>Register</StyledBtn>
            <StyledBtn onClick={() => history.push("/play")}>Connect4</StyledBtn>
            <StyledBtn onClick={() => history.push("/rules")}>Rules</StyledBtn>
        </div>
    )
}

export default Home