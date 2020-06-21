import styled from 'styled-components'

export const NavbarStyled = styled.div`
    ul {
        list-style: none;
        li {
            width: 100%;
            a {
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 100%;
                text-decoration: none;
                color: #222;
                padding: 5px 10px;
                cursor: pointer;
                transition: all .2s ease;
                align-items: center;
                span {
                    margin-right: 5px;
                }
                &:hover {
                    background-color: #a63851;
                    color: #fff;
                }
            }
        }
        .logout {
            a {
                color: #a63851;
            }
        }
    }

    @media (max-width: 768px){
        ul {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: #222;
            display: grid;
            grid-template-columns: repeat(4, 1fr); 
            padding: 0 10px;
            li {
                justify-self: center;
                a {
                    color: #fff;
                    padding: 12px 10px;
                    text-align: center;
                    transition: all .2s ease;
                    display: block;
                    p {
                        display: none;
                    }

                    &:hover {
                        background-color: #222;
                        color: #a63851;
                    }
                }
                .active-link {
                    span {
                        color: #a63851;
                    }
                }
            }
            .logout {
                a {
                    color: #fff;
                }
            }
        }
    }
`