import styled from "styled-components"

export const StyledRules = styled.div`
    padding-bottom: 30px;
    button {
        background: linear-gradient(145deg, #6cc3cb, #5ba4ab);
        border: none;
        border-radius: 30px;
        box-shadow:  5px 5px 5px #646c51,
                    -5px -5px 5px #dff2b4;
        color: white;
        font-size: 35px;
        font-weight: bold;
        height: 55px;
        margin: 15px 248px;
        padding: 0 70px;
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
        font-size: 40px;
        margin: 15px 300px;
    }
    p {
        font-size: 20px;
        margin: 15px 50px;
        text-align: justify;
    }
`