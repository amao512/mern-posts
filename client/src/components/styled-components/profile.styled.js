import styled from 'styled-components'
import { styles } from './config'

export const ProfileBlock = styled.div`
    margin-top: 90px;
    padding: 20px 10px;
    background-color: #fff;
    border: ${styles.border}
    border-radius: 4px;
    margin-bottom: 5px;

    .profile-info {
        position: relative;
        padding-top: 40px;
        text-align: center;
        .photo {
            position: absolute;
            left: 50%;
            top: -100px;
            transform: translate(-50%);
            border: 4px solid #fff;
            border-radius: 50%;
            width: 150px;
            height: 150px;
            img {
                width: 100%;
            }
        }
        .name {
            padding: 10px 5px 0;
            p {
                font-size: 24px;
                font-weight: bold;
            }
        }
        .email {
            p {
                font-size: 16px;
            }
        }
    }

    @media (max-width: 768px){
        border-radius: 0;
    }
`