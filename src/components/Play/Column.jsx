import Slot from "./Slot"

const Column = ({ column, onClick }) => {
    return (
        <div style={{width: '10vw'}}>
            {column.map((el, i) => <Slot key={i} onClick={onClick} value={el}></Slot> )}
        </div>
    )
}

export default Column