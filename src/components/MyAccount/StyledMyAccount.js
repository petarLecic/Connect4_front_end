import styled from "styled-components"

export const StyledMyAccount = styled.div`
    display: flex;
    flex-wrap: wrap;
    button {
        background: linear-gradient(145deg, #6cc3cb, #5ba4ab);
        border: none;
        border-radius: 30px;
        box-shadow:  5px 5px 5px #646c51,
                    -5px -5px 5px #dff2b4;
        color: white;
        font-size: 15px;
        font-weight: bold;
        height: 45px;
        margin: 15px;
        padding: 0 20px;
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
    div {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        width: 100%;
    }
    h1 {
        font-size: 35px;
        text-align: center;
        width: 100%;
    }
    p {
        font-size: 15px;
        margin: 1% 10%;
        width: 80%;
    }
    .remove {
        background-color: grey;
        border-radius: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        button {
            background: #a32f35;
            border-radius: 30px;
            box-shadow:  5px 5px 5px #411315;
            &:active {
                background: #a32f35;
                border-radius: 30px;
                box-shadow: inset 5px 5px 5px #4e1719,
                            inset -5px -5px 5px #e08c91;
            }
        }
        input {
            font-weight: bold;
            margin: 1% 20%;
            padding-bottom: 2px;
            text-align: center;
            width: 60%;
        }
        p {
            color: black;
            font-weight: bold;
            margin: 10px;
            text-align: center;
            width: 100%;
        }
    }
    @media (min-width: 495px) {
        button {
            font-size: 20px;
        }
        input {
            font-size: 20px;
        }
        p {
            font-size: 20px;
            margin: 1% 10%;
            width: 30%
        }
    }
    @media (min-width: 700px) {
        button {
            font-size: 30px;
            height: 55px;
        }
        h1 {
            font-size: 45px;
        }
        p {
            margin: 0 15%;
            width: 20%;
        }
    }
`