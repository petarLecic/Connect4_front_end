const Column = ({ column, setColumn, player, setPlayer }) => {
    const styledSlot = {
        width: '50px',
        height: '50px',
        border: "1px solid black"
    }

    function move(column, setColumn, player, setPlayer) {
        let tmp = [...column].reverse()
        const index = tmp.findIndex(el => typeof el == 'undefined')
        if (index == -1) return
        tmp[index] = player
        setColumn(tmp.reverse())
        setPlayer(prev => prev == 'rgb(163, 47, 53)' ? 'rgb(101, 182, 190)' : 'rgb(163, 47, 53)')
    }

    return (
        <div onClick={() => move(column, setColumn, player, setPlayer)}>
            {column.map((el, i) => <div key={i} style={{...styledSlot, background: el}}></div> )}
        </div>
    )
}

export default Column