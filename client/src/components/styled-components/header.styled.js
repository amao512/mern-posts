import styled from 'styled-components'

export const HeaderShapka = styled.header`
    background-color: #222;
    color: #fff;
    width: 100%;
    padding: 15px 0;
    .header-container {
        max-width: 990px;
        margin: 0 auto;
        padding: 0 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .logo {
            a {
                text-decoration: none;
                display: flex;
                flex-direction: row;
                align-items: center;
                h1 {
                    background-color: #a63851;
                    padding: 0 5px;
                    font-size: 24px;
                    color: #fff;
                }
                span {
                    color: #a63851;
                    font-size: 24px;
                    padding: 0 5px;
                }
            }
        }
        .header-admin {
            justify-self: end;
            display: inline-flex;
            margin-right: 15px;
            p {
                font-size: 16px;
                margin-right: 15px;
            }
            a {
                text-decoration: none;
                color: red;
            }
        }
    }
`