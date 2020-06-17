import styled from "styled-components";

export const InfoHeadStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0;
    .author {
        display: flex;
        flex-direction: row;
        align-items: center;
        a {
            text-decoration: none;
            color: #222;
        }
        span {
            margin-right: 10px;
            font-size: 44px;
        }
        img {
            width: 45px;
            margin-right: 10px;
        }
        .info {
            p {
                font-size: 16px;
                padding: 0;
            }
            .date {
                font-size: 12px;
            }
        }
    }

    .drag-menu {
        span {
            cursor: pointer;
        }
        ul {
            display: none;
            position: absolute;
            right: 10px;
            top: 50px;
            width: 100px;
            border: 1px solid #222;
            border-radius: 4px;
            background-color: #fff;
            list-style: none;
            transition: all .2s ease;
            a {
                text-decoration: none;
            }
            li {
                text-decoration: none;
                color: #222;
                padding: 10px 5px;
                transition: all .2s ease;
                cursor: pointer;
                width: 100%;
                &:hover {
                    background-color: #222;
                    color: #fff;
                }
            }
        }
        &:hover {
            ul {
                display: block;
            }
        }
    }
}
`