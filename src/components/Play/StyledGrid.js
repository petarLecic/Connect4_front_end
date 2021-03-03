import styled from "styled-components"

export const StyledGrid = styled.div`
    background-color: #50509c;
    border-radius: 30px;
    box-shadow: -10px -10px 10px #474746,
                10px 10px 10px #dff2b4;
    display: flex;
    justify-content: center;
    margin: 15px 85px;
    padding: 5px 0;
    transform: rotateX(0.5turn);
    width: 530px;
    .column {
        width: 70px;
    }
`