import { Redirect, useHistory } from "react-router-dom"
import { StyledMyAccount } from "./StyledMyAccount"
import { deleteAcc } from "../../service"
import { useState } from "react"
import Loading from "../Loading/Loading"

const MyProfile = ({ user, setUser }) => {
    const [showRemove, setShowRemove] = useState(false)
    const [inputRemove, setInputRemove] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()

    function winPercentage() {
        const percent = Math.round(user.score.won * 100 / user.score.played)
        return isNaN(percent) ? 0 : percent
    }

    function removeAcc(input) {
        if (input == `${user.username}_delete`) {
            deleteAcc(user).then(res => {
                if (res.data == 1) setUser(null)
            })
            setIsLoading(true)
        }
        else setShowRemove(false)
    }

    return  user ?
        <StyledMyAccount>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Username:</b> {user.username}</p>
            <h1>Score</h1>
            <p><b>Win rate:</b> {winPercentage()}%</p>
            <p><b>Played:</b> {user.score.played}</p>
            <p><b>Won:</b> {user.score.won}</p>
            <p><b>Lost:</b> {user.score.lost}</p>
            {
                showRemove ? 
                <div className="remove">
                    <p>{`To remove you\'re account please type in "${user.username}_delete"`}</p>
                    <input type="text" spellCheck={false} onChange={e => setInputRemove(e.target.value)}/>
                    <button onClick={() => setShowRemove(false)}>Cancel</button>
                    <button onClick={() => removeAcc(inputRemove)}>Confirm</button>
                </div>
                :
                <div>
                    <button onClick={() => history.push('/')}>Back</button>
                    <button onClick={() => setUser(null)}>Logout</button>
                    <button onClick={() => setShowRemove(true)}>Remove Account</button>
                </div>
            }
            { isLoading ? <Loading/> : null }
        </StyledMyAccount>
        :
        <Redirect to="/" />
}

export default MyProfile