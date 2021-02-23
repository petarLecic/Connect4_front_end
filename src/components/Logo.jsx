import { useHistory } from "react-router-dom"
import styled from "styled-components"
import logo from '../images/c4_logo.png'

const LogoStyled = styled.img`
    width: 30vw;
    height: 10vw;
`

const Logo = () => {
    const history = useHistory()
    return <LogoStyled src={logo} alt="c4 logo" onClick={() => history.push('/')}/>
}

export default Logo