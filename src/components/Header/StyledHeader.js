import styled from 'styled-components'

export const StyledHeader = styled.header`
    img {
        width: 80%;
        margin: 15px 10%;
    }
    @media(min-width: 700px) {
        img {
            margin: 15px 165px;
            width: 370px;
            &:hover {
                cursor: pointer;
            }
        }
    }
` 