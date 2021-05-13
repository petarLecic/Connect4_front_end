import styled from 'styled-components'

export const StyledLoading = styled.div`
    align-items: center;
    background-color: rgba(0,0,0,0.3);
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    .loading {
        animation: spin 2s linear infinite;
        border: 16px solid rgb(208,226,168);
        border-radius: 50%;
        border-top: 16px solid #65b6be;
        height: 120px;
        width: 120px;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`