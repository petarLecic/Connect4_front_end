import styled from "styled-components"

export const StyledSlot = styled.div`
    background-color: rgb(208,226,168);
    border: 2px solid #373765;
    border-radius: 50px;
    box-shadow: inset 3px 3px 5px black;
    height: 25px;
    margin: 5px 0;
    width: 25px;
    @media (min-width: 360px) {
        height: 30px;
        margin: 5px 1px;
        width: 30px;
    }
    @media (min-width: 400px) {
        box-shadow: inset 3px 3px 7px black;
        height: 30px;
        margin: 5px 3px;
        width: 30px;
    }
    @media (min-width: 470px) {
        height: 35px;
        margin: 3px 5px;
        width: 35px;
    }
    @media (min-width: 580px) {
        height: 45px;
        margin: 4px 5px;
        width: 45px;
    }
    @media (min-width: 700px) {
        box-shadow: inset 3px 3px 10px black;
        height: 55px;
        width: 55px;
    }
`