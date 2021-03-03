import Slot from "./Slot"

const Column = ({ column, onClick }) => {
    return (
        <div className="column">
            {column.map((el, i) => <Slot key={i} onClick={onClick} value={el}></Slot> )}
        </div>
    )
}

export default Column