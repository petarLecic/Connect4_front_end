import styled from "styled-components"

export const LogoStyled = styled.img`
    width: 27vw;
    height: 7vw;
    &:hover{
        cursor: pointer;
    }
`

export const AppStyled = styled.div`
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: space-around;
    background: rgb(208, 226, 168);
    margin: 0 auto;
    padding-top: 2%;
    padding-bottom: 5%;
`

export const UserStyled = styled.p`
    width: 100%;
    margin-bottom: 1vw;
    text-align: center;
    font-size: 2vw;
    font-weight: bold;
`
export const DivStyled = styled.div`
    margin: 7%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const RouteBtnStyled = styled.button`
    flex: 1 1 1;
    margin: 1vw 1vw;
    padding: 1vw;
    width: 40%;
    height: 10vw;
    background: rgb(101, 182, 190);
    color: white;
    border: none;
    border-radius: 1vw;
    font-size: 3vw;
    font-weight: bold;
    text-shadow: 1px 2px black;
    &:hover{
        background: rgb(163, 47, 53);
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }
`
export const FormStyled = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2vw;
`
export const InputStyled = styled.input `
    width: 50%;
    height: 2vw;
    margin: 1vw;
    padding-left: 1vw;
    background: rgb(101, 182, 190);
    color: white;
    text-shadow: 1px 1px black;
    font-size: 1.5vw;
    font-weight: 500;
    border-radius: 1vw;
    &::placeholder {
        color: rgb(50, 50, 50);
        text-shadow: none;
        font-style: italic;
        font-weight: normal;
    }
    &:focus {
        outline: none;
    }
`

export const ButtonStyled = styled.button`
    width: 40%;
    height: 3vw;
    margin: 3vw 5vw;
    padding: 0 3vw;
    background: rgb(101, 182, 190);
    border: 1px solid black;
    color: white;
    border: none;
    border-radius: 1vw;
    font-size: 2vw;
    font-weight: bold;
    text-shadow: 1px 2px black;
    &:hover{
        background: rgb(163, 47, 53);
        cursor: pointer;
    }
    &:focus{
        outline: none;
    }
`

export const ErrorStyled = styled.div`
    width: 100%;
    background: #fca0a0;
    color: #d30000;
    font-size: 1.5vw;
    text-align: center;

`

export const ParagraphStyled = styled.p`
    width: 100%;
    text-align: start;
    margin-left: 1vw;
    font-size: 1.5vw;
`

export const H1Styled = styled.h1`
    width: 100%;
    text-align: center;
    margin: 1vw;
`
//colors
// fern green : (97, 134, 65)
// stiletto red : (163, 47, 53)
// fountain blue: (101, 182, 190)
// deco: (208, 226, 168)