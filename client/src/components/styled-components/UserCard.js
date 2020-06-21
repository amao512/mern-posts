import styled from 'styled-components'
import { styles } from './config'

export const UserCard = styled.div`
    width: 100%;
    padding: 20px 10px 30px;
    background-color: #fff;
    border: ${styles.border}
    border-radius: 4px;
    text-align: center;
    a {
        text-decoration: none;
        color: #222;
    }

    .user-img {
        width: 80px;
        height: 80px;
        margin: 0 auto;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            background-position: center;
            background-size: 100%;
        }
    }

    .name {
        padding: 5px 0 0;
        p {
            font-size: 18px;
            font-weight: bold;
        }
    }

    .email {
        padding: 0 5px;
        p {
            font-size: 12px;
        }
    }
`