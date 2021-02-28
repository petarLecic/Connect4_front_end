import styled from "styled-components"

export const StyledMyAccount = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2vw;
    button {
        background: linear-gradient(145deg, #6cc3cb, #5ba4ab);
        border: none;
        border-radius: 30px;
        box-shadow:  5px 5px 5px #646c51,
                    -5px -5px 5px #dff2b4;
        color: white;
        font-size: 2.5vw;
        font-weight: bold;
        height: 4vw;
        margin: 1vw;
        padding: 0 3vw;
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
        margin: 2vw 2.9vw;
        padding-bottom: 1vw;
    }
    h1 {
        font-size: 3vw;
        margin: 1vw 20.8vw;
    }
    p {
        font-size: 2vw;
        margin-left: 9vw;
        width: 13vw;
    }
    .remove {
        background-color: grey;
        border-radius: 2vw;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        button {
            background: #a32f35;
            border-radius: 34px;
            box-shadow:  5px 5px 5px #411315;
                        /* -5px -5px 5px #ff4b55; */
            &:active {
                background: #a32f35;
                border-radius: 30px;
                box-shadow: inset 5px 5px 5px #4e1719,
                            inset -5px -5px 5px #e08c91;
            }
        }
        input {
            font-size: 1.8vw;
            font-weight: bold;
            height: 2vw;
            margin: 0.8vw;
            padding-bottom: 0.5vw;
            text-align: center;
            width: 70%;
        }
        p {
            color: black;
            font-size: 1.8vw;
            font-weight: bold;
            margin: 0.8vw;
            text-align: center;
            width: 100%;
        }
    }
`