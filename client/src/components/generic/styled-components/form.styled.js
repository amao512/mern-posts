import styled from 'styled-components'
import { device } from './config.styled'

export const SignInUp = styled.div`
    max-width: 360px;
    border: 2px solid #222;
    padding: 10px 15px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h1 {
        text-align: center;
        padding: 5px;
        margin-bottom: 5px;
    }
    .question {
        text-align: center;
        padding: 10px 5px;
    }

    @media (max-width: 320px){
        width: 260px;
    }

    @media ${device.mobileS}{
        width: 320px;
    }

    @media ${device.mobileL}{
        width: 360px;
    }

    @media ${device.tablet}{
        max-width: 360px;
    }
`

export const Form = styled.form`
    input {
        margin: 5px 0;
        border: 1px solid #222;
        padding: 8px 12px;
        outline: none;
        background: #222;
        color: #fff;
        width: 100%;
        transition: all .2s ease;
        font-size: 16px;
        border-radius: 4px;
        &:focus {
            background: #fff;
            color: #222;
        }
    }
    button {
        background-color: #222;
        padding: 8px 12px;
        color: #fff;
        width: 100%;
        margin: 0 auto;
        outline: none;
        cursor: pointer;
        border: 2px solid #222;
        transition: all .2s ease;
        margin-top: 10px;
        font-size: 16px;
        border-radius: 4px;
        &:active {
            background-color: #fff;
            color: #222
        }
        &:disabled {
            color: #d3d3d3;
        }
    }
`