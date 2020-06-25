import styled from "styled-components";

export const CommentStyled = styled.div`
    padding: 5px 20px;
    margin-bottom: 15px;
    position: relative;
    background-color: #fff;
    border-top: 1px solid #d3d3d3;

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

    .editing {
        display: grid;
        grid-gap: 5px;
        padding: 10px 0;
        border-bottom: 1px solid #d3d3d3;
        textarea {
            width: 100%;
            resize: none;
            height: 50px;
            padding: 6px 12px;
            font-family: Arial, sans-serif;
        }
        button {
            border: 1px solid #222;
            background-color: #222;
            color: #fff;
            padding: 6px 12px;
            cursor: pointer;
            outline: none;
        }
    }
`