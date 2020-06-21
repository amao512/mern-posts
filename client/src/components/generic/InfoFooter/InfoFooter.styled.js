import styled from 'styled-components'

export const InfoFooterStyled = styled.div`
    border-top: 1px solid #222;
    padding: 10px 0;
    display: grid;
    grid-template-columns: .1fr 1fr;
    grid-gap: 15px;
    align-items: center;
    
    .views,
    .comments {
        display: flex;
        flex-direction: center;
        align-items: center;
        a {
            text-decoration: none;
            color: #222;
            display: flex;
            flex-direction: center;
            align-items: center;
        }
        span {
            margin-right: 5px;
            font-size: 18px;
        }
        p { 
            font-size: 13px; 
        }
    }
`