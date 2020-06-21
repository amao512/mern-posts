import styled from "styled-components";

export const PopUp = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: rgba(0,0,0,0.5);
    overflow: hidden;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;

    .content {
        background-color: #fff;
        list-style: none;
        margin: 50% auto;
        width: 200px;
        position: relative;
        .close {
            position: absolute;
            top: -50px;
            right: -50px;
            cursor: pointer;
            padding: 5px;
            span {
                font-size: 44px;
                color: #fff;
            }
        }
        li {
            padding: 10px 20px;
            cursor: pointer;
            transition: all .2s ease;
            font-size: 20px;
            input {
                display: none;
            }
            label {
                cursor: pointer;
            }

            &:hover {
                background-color: #c5c5c5;
            }
        }
    }
`