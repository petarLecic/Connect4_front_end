import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    button {
        background: linear-gradient(145deg, #6cc3cb, #5ba4ab);
        border: none;
        border-radius: 30px;
        box-shadow:  5px 5px 5px #646c51,
                    -5px -5px 5px #dff2b4;
        color: white;
        font-size: 30px;
        font-weight: bold;
        height: 45px;
        margin: 15px 300px;
        padding: 0 25px;
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
        font-size: 17px;
        font-weight: 500;
        height: 40px;
        margin: 15px;
        padding-bottom: 5px;
        padding-left: 25px;
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
        font-size: 20px;
        margin: 20px;
        a {
            padding-left: 13px;
        }
    }
    .error {
        background: #fca0a0;
        color: #d30000;
        font-size: 30px;
        margin: 13px 0;
        text-align: center;
        width: 100%;
    }
    @media (min-width: 405px) {
        button {
            padding: 0 45px;
        }
        input {
            font-size: 20px;
        }
        p {
            font-size: 20px;
        }
    }
    @media (min-width: 700px) {
        button {
            font-size: 35px;
            height: 55px;
            padding: 0 70px;
        }
        input {
            font-size: 25px
        }
        p {
            font-size: 25px;
            margin: 30px;
            a {
            padding-left: 13px;
        }
        }
    }
`