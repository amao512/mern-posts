import styled from "styled-components";

export const CommentStyled = styled.div`
    padding: 5px 20px;
    margin-bottom: 15px;
    position: relative;
    background-color: #fff;
    border-top: 1px solid #222;

    @media (max-width: 768px){
        border-radius: 0;
        margin-bottom: 10px;
        padding: 5px 15px;
    }
    
    .comment {
        font-size: 16px;
        padding: 0 15px 10px;
        border-bottom: 1px solid #d3d3d3;
        margin-bottom: 10px;
    }
`