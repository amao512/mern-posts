import styled from 'styled-components'

export const PostCard = styled.div`
    border: 1px solid rgba(0,0,0,.15);
    border-radius: 4px;
    padding: 5px 20px;
    margin-bottom: 15px;
    position: relative;
    background-color: #fff;

    @media (max-width: 768px){
        border: none;
        border-radius: 0;
        margin-bottom: 10px;
        padding: 5px 15px;
    }

    .title {
        font-size: 24px;
        margin: 0;
        border: none;
        a {
            text-decoration: none;
            color: #222;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    
    .text {
        font-size: 16px;
        padding: 10px 0;
    }
`