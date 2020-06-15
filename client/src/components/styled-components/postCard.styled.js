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

    .post-head {
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
                right: 0;
                top: 30px;
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
    .post-footer {
        border-top: 1px solid #222;
        padding: 10px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
        align-items: center;
        
        .views {
            display: flex;
            flex-direction: center;
            align-items: center;
            span {
                margin-right: 5px;
                font-size: 18px;
            }
            p { 
                font-size: 13px; 
            }
        }

        button {
            justify-self: end;
            border: 1px solid #222;
            background-color: #222;
            padding: 6px 12px;
            border-radius: 4px;
            transition: all .2s ease;
            a {
                text-decoration: none;
                color: #fff;
                font-size: 16px;
            }
            &:active {
                background-color: #fff;
                color: #222;
            }
        }
    }
`