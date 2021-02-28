import { useHistory } from "react-router-dom"
import { StyledHeader } from "./StyledHeader"
import logo from '../../images/c4_logo.png'

const Logo = () => {
    const history = useHistory()
    return (
        <StyledHeader>
            <img src={logo} alt="c4 logo" title="Home" onClick={() => history.push('/')}/>
        </StyledHeader>
    ) 
}

export default Logo