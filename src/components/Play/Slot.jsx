import { StyledSlot } from "./StyledSlot"

const Slot = ({ value, onClick }) => {
    let color
    if (value == 'Blue') color =  'rgb(101, 182, 190)'
    else if (value == 'Red') color = 'rgb(163, 47, 53)'
    else color = 'rgb(208, 226, 168)'
    
    return <StyledSlot onClick={onClick} style={{backgroundColor: color}}></StyledSlot>
}

export default Slot