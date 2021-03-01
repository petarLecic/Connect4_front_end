import Column from "./Column"
import { StyledGrid } from "./StyledGrid"

const Grid = ({ columns, move }) => {
    return (
        <StyledGrid>
            {columns.map((column, index) => {
                    return <Column key={index} column={column} onClick={() => move(index)} />
                })}
        </StyledGrid>
    )
}

export default Grid