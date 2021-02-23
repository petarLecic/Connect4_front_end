import { useHistory } from "react-router-dom"
import { LogoStyled } from "../StyledComponents"
import logo from '../images/c4_logo.png'

const Logo = () => {
    const history = useHistory()
    return <LogoStyled src={logo} alt="c4 logo" title="Home" onClick={() => history.push('/')}/>
}

export default Logo