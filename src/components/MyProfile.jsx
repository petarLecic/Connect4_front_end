import { Redirect, useHistory } from "react-router-dom"
import { ButtonStyled, DivStyled, H1Styled, ParagraphStyled } from "../StyledComponents"
import { deleteAcc } from "../service"

const MyProfile = ({ user, setUser }) => {
    const history = useHistory()

    function winPercentage() {
        const percent = Math.round(user.score.won * 100 / user.score.played)
        return isNaN(percent) ? 0 : percent
    }

    function removeAcc() {
        const confirm = prompt(`To remove you\'re account please type in "${user.username}_delete"`)
        if (confirm === `${user.username}_delete`) {
            deleteAcc(user).then(res => {
                if (res.data == 1) setUser(null)
            })
        }
    }

    return  user ?
        <DivStyled>
            <H1Styled>Personal info</H1Styled>
            <ParagraphStyled><b>First Name:</b> {user.firstName}</ParagraphStyled>
            <ParagraphStyled><b>Last Name:</b> {user.lastName}</ParagraphStyled>
            <ParagraphStyled><b>Email:</b> {user.email}</ParagraphStyled>
            <ParagraphStyled><b>Username:</b> {user.username}</ParagraphStyled>

            <H1Styled>Score</H1Styled>
            <ParagraphStyled><b>Win rate:</b> {winPercentage()}%</ParagraphStyled>
            <ParagraphStyled><b>Played:</b> {user.score.played}</ParagraphStyled>
            <ParagraphStyled><b>Won:</b> {user.score.won}</ParagraphStyled>
            <ParagraphStyled><b>Lost:</b> {user.score.lost}</ParagraphStyled>
            <ButtonStyled style={{margin: "1vw"}} onClick={history.goBack}>Back</ButtonStyled>
            <ButtonStyled style={{margin: "1vw"}} onClick={() => setUser(null)}>Logout</ButtonStyled>
            <ButtonStyled style={{margin: "1vw"}} onClick={removeAcc}>Remove</ButtonStyled>
        </DivStyled>
        :
        <Redirect to="/" />
}

export default MyProfile