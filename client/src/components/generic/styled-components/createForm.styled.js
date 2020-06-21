import styled from "styled-components";
import { styles } from './config.styled'

export const CreateForm = styled.div`
    margin-bottom: 30px;

    input {
        width: 100%;
        height: 50px;
        padding: 10px 12px;
        font-size: 20px;
        border: 1px solid rgba(0,0,0,.15);
        margin-bottom: 10px;
        border-radius: 4px;
        outline: none;
    }

    textarea {
        width: 100%;
        height: 50vh;
        border: 1px solid rgba(0,0,0,.15);
        padding: 8px 12px;
        border-radius: 4px;
        resize: none;
        outline: none;
        font-size: 16px;
        font-family: Arial, sans-serif;
    }

    .btn {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
        button:nth-child(1) {
            border: 1px solid ${styles.mainColor}
        }
    }

    button {
        width: 100%;
        padding: 8px 12px;
        font-size: 18px;
        cursor: pointer;
        background-color: #222;
        border: 1px solid #222;
        color: #fff;
        border-radius: 4px;
        margin-top: 10px;
        &:active {
            background-color: #fff;
            color: #222;
        }
    }
    
    .delete {
        background-color: #a63851;
    }

    @media (max-width: 768px){
        h1 {
            text-align: center;
        }

        input,
        textarea {
            border: none;
            border-radius: 0;
        }
        button {
            border-radius: 0;
        }
    }
`