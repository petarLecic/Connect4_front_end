import Column from "./Column"
import { StyledGrid } from "./StyledGrid"

const Grid = ({ player, setPlayer, columns, setColumns, setMoveObj, setMoveCounter }) => {
    function move(index) {
        setMoveCounter(prev => prev + 1)
        let tmp = JSON.parse(JSON.stringify(columns)) // Deep cloning columns (converts undefined to null)
        const i = tmp[index].findIndex(el => typeof el == 'object') // typeof null is object
        if (i == -1) return
        tmp[index][i] = player
        setColumns(tmp)
        setMoveObj({player, col: index, index: i})
        setPlayer(prev => prev == 'red' ? 'blue' : 'red')
    }

    return (
        <StyledGrid>
            {
                columns.map((column, index) => {
                    return <Column key={index} column={column} onClick={() => move(index)} />
                })
            }
        </StyledGrid>
    )
}

export default Grid