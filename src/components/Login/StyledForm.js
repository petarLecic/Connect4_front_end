import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 3vw;
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
        margin: 1vw 20vw;
        padding: 0 5vw;
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
    input {
        background: #65b6be;
        border-radius: 20px;
        box-shadow: inset 2px 2px 5px #28494c,
                    inset -2px -2px 5px #a2ffff;
        color: white;
        font-size: 2vw;
        font-weight: 500;
        height: 3vw;
        margin: 1vw;
        padding-bottom: 0.4vw;
        padding-left: 2vw;
        text-shadow: 1px 1px black;
        width: 50%;
        &:focus {
            outline: none;
            &::placeholder {
                color: transparent;
            }
        }
        &::placeholder {
            color: rgb(50, 50, 50);
            text-shadow: none;
            font-style: italic;
            font-weight: normal;
        }
    }
    p {
        font-size: 1.5vw;
        margin: 2vw;
        a {
            padding-left: 1vw;
        }
    }
    .error {
        background: #fca0a0;
        color: #d30000;
        margin: 1vw 0;
        text-align: center;
        width: 100%;
    }
`