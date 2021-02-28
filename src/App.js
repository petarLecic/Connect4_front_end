import { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Game from './components/Game/Game'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import MyAccount from './components/MyAccount/MyAccount'
import NotFound from './components/NotFound'
import Register from './components/Register/Register'
import Rules from './components/Rules/Rules'
import { StyledApp } from './StyledApp'

const App = () => {
    const [user, setUser] = useState()

    return (
        <StyledApp>
            <Router>
                <Header/>  
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
                        <MyAccount user={user} setUser={setUser}/>
                    </Route>
                    <Route path="/">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </StyledApp>
    )
}

export default App