import { MD5 as encrypt } from 'crypto-js'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { postUser } from '../../service'
import { StyledForm } from '../Login/StyledForm'

const Register = ({ user, setUser }) => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    
    const [error, setError] = useState('')

    const history = useHistory()

    function isValid(email, username, password, password2) {
        if ([...arguments].some(arg => arg.trim().length === 0)) return setError('All fields are required')
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return setError('Invalid email')
        if (/[^\S]/.test(username.trim())) return setError('Username must not include spaces')
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) return setError('Password must include only letters and numbers (at last 8)')
        if (password !== password2) return setError('Confirming password doesn\'t match')
        return true
    }

    function register() {
        if (isValid(email, username, password, password2)) {
            const pass = encrypt(password).toString()
            const user = {email, username, pass}
            postUser(user).then(res => {
                if (typeof res.data == 'string') setError(res.data)
                else {
                    setUser(res.data)
                    history.push('/')
                }
            })
        }
    }

    return user ?
    <h1>You have to logout first</h1>
    :
    <StyledForm id="register" spellCheck={false} onSubmit={e => {
        e.preventDefault()
        register()
        }}
    >
        <input type="text" placeholder="Email adress" 
            onChange={e => {
                setError('')
                setEmail(e.target.value)
            }}
        />
        <input type="text" placeholder="Username" 
            onChange={e => {
                setError('')
                setUsername(e.target.value)
            }}
        />
        <input type="password" placeholder="Password" 
            onChange={e => {
                setError('')
                setPassword(e.target.value)
            }}
        />
        <input type="password" placeholder="Confirm password" 
            onChange={e => {
                setError('')
                setPassword2(e.target.value)
            }}
        />
        {error ? <p className="error">{error}</p> : null}
        <button type="submit" form="register">Register</button>
        <button onClick={() => history.push('/')}>Back</button>
        <p>You already have account?
            <Link to="/login">Login!</Link>
        </p>
    </StyledForm>
}

export default Register