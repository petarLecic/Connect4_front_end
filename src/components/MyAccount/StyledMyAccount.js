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
        font-size: 30px;
        font-weight: bold;
        height: 55px;
        margin: 15px;
        padding: 0 40px;
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
        margin: 30px 63px;
    }
    h1 {
        font-size: 45px;
        margin: 15px 292px;
    }
    p {
        font-size: 25px;
        margin-left: 125px;
        width: 180px;
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
                        /* -5px -5px 5px #ff4b55; */
            &:active {
                background: #a32f35;
                border-radius: 30px;
                box-shadow: inset 5px 5px 5px #4e1719,
                            inset -5px -5px 5px #e08c91;
            }
        }
        input {
            font-size: 25px;
            font-weight: bold;
            margin: 10px;
            padding-bottom: 2px;
            text-align: center;
            width: 70%;
        }
        p {
            color: black;
            font-size: 25px;
            font-weight: bold;
            margin: 10px;
            text-align: center;
            width: 100%;
        }
    }
`