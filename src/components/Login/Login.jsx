import { MD5 as encrypt } from "crypto-js"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { login } from "../../service"
import { StyledForm } from "./StyledForm"

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
            const pass = encrypt(password).toString()
            login({username, pass}).then(res => {
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
        <StyledForm 
        id="login" 
        spellCheck={false} 
        onSubmit={e => {
            e.preventDefault()
            handleLogin()
        }}>
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={e => {
                    if (error) setError('')
                    setUsername(e.target.value)}
                }
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={e => {
                    if (error) setError('')
                    setPassword(e.target.value)}
                } 
            />
            {error ? <p className="error">{error}</p> : null}
            <button type="submit" form="login">Login</button>
            <button onClick={() => history.push('/')}>Back</button>
            <div>
                <p>You don't have an account yet?
                    <Link to="/register">Sign Up!</Link>
                </p>
            </div>
        </StyledForm>
    )
}

export default Login