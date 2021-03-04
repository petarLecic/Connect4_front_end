import styled from "styled-components"

export const StyledGame = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 30px;
    button {
        background: linear-gradient(145deg, #6cc3cb, #5ba4ab);
        border: none;
        border-radius: 30px;
        box-shadow:  5px 5px 5px #646c51,
                    -5px -5px 5px #dff2b4;
        color: white;
        font-size: 25px;
        font-weight: bold;
        height: 45px;
        padding: 0 45px;
        text-shadow: 1px 2px black;
        &:active {
            background: #a32f35;
            border-radius: 30px;
            box-shadow: inset 5px 5px 5px #4e1719,
                        inset -5px -5px 5px #f84751;
            }
        &:focus {
            outline: none;
        }
        &:hover {
            background: linear-gradient(145deg, #ae3239, #932a30);
            cursor: pointer;
        }
    }
    h1 {
        font-size: 30px;
        text-align: center;
        width: 100%;
    }
    @media (min-width: 700px) {
        button {
            font-size: 35px;
            height: 55px;
            padding: 0 65px;
        }
        h1 {
            font-size: 40px;
        }
    }
`