import { useState } from "react"
import { ButtonStyled } from "../../StyledComponents"
import Column from "./Column"

const Grid = ({ player, setPlayer }) => {
    const [col1, setCol1] = useState(new Array(6).fill(undefined))
    const [col2, setCol2] = useState(new Array(6).fill(undefined))
    const [col3, setCol3] = useState(new Array(6).fill(undefined))
    const [col4, setCol4] = useState(new Array(6).fill(undefined))
    const [col5, setCol5] = useState(new Array(6).fill(undefined))
    const [col6, setCol6] = useState(new Array(6).fill(undefined))
    const [col7, setCol7] = useState(new Array(6).fill(undefined))

    function resetGame() {
        setCol1(new Array(6).fill(undefined))
        setCol2(new Array(6).fill(undefined))
        setCol3(new Array(6).fill(undefined))
        setCol4(new Array(6).fill(undefined))
        setCol5(new Array(6).fill(undefined))
        setCol6(new Array(6).fill(undefined))
        setCol7(new Array(6).fill(undefined))
    }

    return (
        <>
            <Column column={col1} setColumn={setCol1} player={player} setPlayer={setPlayer} />
            <Column column={col2} setColumn={setCol2} player={player} setPlayer={setPlayer} />
            <Column column={col3} setColumn={setCol3} player={player} setPlayer={setPlayer} />
            <Column column={col4} setColumn={setCol4} player={player} setPlayer={setPlayer} />
            <Column column={col5} setColumn={setCol5} player={player} setPlayer={setPlayer} />
            <Column column={col6} setColumn={setCol6} player={player} setPlayer={setPlayer} />
            <Column column={col7} setColumn={setCol7} player={player} setPlayer={setPlayer} />
            <ButtonStyled onClick={resetGame}>Reset</ButtonStyled>
        </>
    )
}

export default Grid