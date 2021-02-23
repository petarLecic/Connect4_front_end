import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { postUser } from '../service'
import { ErrorStyled, FormStyled, InputStyled, SubmitBtnStyled } from '../StyledComponents'

const Register = ({ user, setUser }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    
    const [error, setError] = useState('')

    const history = useHistory()

    function isValid(firstName, lastName, email, username, password, password2) {
        if ([...arguments].some(arg => arg.trim().length === 0)) return setError('All fields are required')
        if (!/^[A-Za-z]{2,}$/.test(firstName.trim())) return setError('First Name must include letters only (at last 2)')
        if (!/^[A-Za-z]{2,}$/.test(lastName.trim())) return setError('Last Name must include letters only (at last 2)')
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return setError('Invalid email')
        if (/[^\S]/.test(username.trim())) return setError('Username must not include spaces')
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) return setError('Password must include only letters and numbers (at last 8)')
        if (password !== password2) return setError('Confirming password doesn\'t match')
        return true
    }

    function register() {
        if (isValid(firstName, lastName, email, username, password, password2)) {
            const user = {firstName, lastName, email, username, password}
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
    <FormStyled id="register" spellCheck={false} onSubmit={e => {
        e.preventDefault()
        register()
        }}
    >
        <InputStyled type="text" placeholder="First Name" 
            onChange={e => {
                setError('')
                setFirstName(e.target.value)
            }}
        />
        <InputStyled type="text" placeholder="Last Name" 
            onChange={e => {
                setError('')
                setLastName(e.target.value)
            }}
        />
        <InputStyled type="text" placeholder="Email adress" 
            onChange={e => {
                setError('')
                setEmail(e.target.value)
            }}
        />
        <InputStyled type="text" placeholder="Username" 
            onChange={e => {
                setError('')
                setUsername(e.target.value)
            }}
        />
        <InputStyled type="password" placeholder="Password" 
            onChange={e => {
                setError('')
                setPassword(e.target.value)
            }}
        />
        <InputStyled type="password" placeholder="Confirm password" 
            onChange={e => {
                setError('')
                setPassword2(e.target.value)
            }}
        />
        {error ? <ErrorStyled>{error}</ErrorStyled> : null}
        <SubmitBtnStyled type="submit" form="register">Register</SubmitBtnStyled>
    </FormStyled>
}

export default Register