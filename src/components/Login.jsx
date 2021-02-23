import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { login } from "../service"
import { StyledInput, StyledError } from './Register'

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
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                handleLogin()
            }}>
                <StyledInput 
                    type="text" 
                    placeholder="Username" 
                    value={username}
                    onChange={e => {
                        if (error) setError('')
                        setUsername(e.target.value)}
                    } 
                />
                <StyledInput 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => {
                        if (error) setError('')
                        setPassword(e.target.value)}
                    } 
                />
                {error ? <StyledError>{error}</StyledError> : null}
                <StyledInput type="submit" value="Login" />
            </form>
            <p>You don't have an account yet?
                <Link to="/register">Sign Up</Link>
            </p>
        </div>
    )
}

export default Login