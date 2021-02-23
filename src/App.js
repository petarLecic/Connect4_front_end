import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import styled from 'styled-components'
import Game from './components/Game'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Rules from './components/Rules'

const UserStyled = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`
//colors
// fern green : (97, 134, 65)
// stiletto red : (163, 47, 53)
// fountain blue: (101, 182, 190)
// deco: (208, 226, 168)

const App = () => {
    const [user, setUser] = useState()

    return (
        <>
            {user ? <UserStyled>
                        <span>{user.firstName} {user.lastName}</span>
                        <button onClick={() => {
                            setUser(null)
                        }}>Logout</button>
                    </UserStyled>
                : null
            }
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login setUser={setUser}/>
                    </Route>
                    <Route path="/register">
                        <Register user={user} setUser={setUser}/>
                    </Route>
                    <Route path="/play">
                        <Game user={user}/>
                    </Route>
                    <Route path="/rules">
                        <Rules />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default App