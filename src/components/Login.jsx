import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { login } from "../service"
import { ButtonStyled, ErrorStyled, FormStyled, InputStyled } from "../StyledComponents"

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    function isValid(username, password) {
        return (username.trim().length < 4 || password.trim().length < 4) ? false : true
    }
    
    function handleLogin() {
        if (isValid(username, password)) {
            login({username, password}).then(res => {
                if (res.data) {
                    setUser(res.data)
                    history.push('/')
                }
                else setError('Wrong inputs')
            })
        }
        else {
            setUsername('')
            setPassword('')
            setError('Invalid input/s')
        }
    }

    return (
        <FormStyled 
        id="login" 
        spellCheck={false} 
        onSubmit={e => {
            e.preventDefault()
            handleLogin()
        }}>
            <InputStyled 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={e => {
                    if (error) setError('')
                    setUsername(e.target.value)}
                } 
            />
            <InputStyled 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={e => {
                    if (error) setError('')
                    setPassword(e.target.value)}
                } 
            />
            {error ? <ErrorStyled>{error}</ErrorStyled> : null}
            <ButtonStyled type="submit" form="login">Login</ButtonStyled>
            <div>
                <span>You don't have an account yet?   </span>
                <Link to="/register">Sign Up</Link>
            </div>
        </FormStyled>
    )
}

export default Login