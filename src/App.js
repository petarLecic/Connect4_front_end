import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Game from './components/Game'
import Home from './components/Home'
import Login from './components/Login'
import Logo from './components/Logo'
import MyProfile from './components/MyProfile'
import NotFound from './components/NotFound'
import Register from './components/Register'
import Rules from './components/Rules'
import { AppStyled, UserStyled } from './StyledComponents'

const App = () => {
    const [user, setUser] = useState()

    return (
        <AppStyled>
            <Router>
                <Logo />  
                <Switch>
                    <Route exact path="/">
                        <Home user={user} setUser={setUser}/>
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
                    <Route path="/myprofile">
                        <MyProfile user={user} setUser={setUser}/>
                    </Route>
                    <Route path="/">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </AppStyled>
    )
}

export default App