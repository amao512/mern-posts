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
            overflow: hidden;
            cursor: pointer;
            img {
                width: 100%;
                height: 100%;
                z-index: 1;
                background-position: center;
                background-size: cover;
            }

            .choose-img {
                background-color: #222;
                color: #fff;
                position: absolute;
                top: 50px;
                right: 0;
                left: 0;
                bottom: 0;
                transform: translateY(100px);
                transition: all .2s ease;
                cursor: pointer;
                span {
                    font-size: 30px;
                    margin-top: 5px;
                }
            }

            &:hover {
                .choose-img {
                    transform: translateY(50px)
                }
            }
        }

        .settings {
            position: absolute;
            top: 0;
            right: 0;

            span {

            }

            ul {
                position: absolute;
                top: 20px;
                right: 10px;
                display: none;
                transition: all .2s ease;
                background-color: #fff;
                color: #222;
                list-style: none;
                padding: 0;

                li {
                    padding: 10px;
                }
            }

            &:hover {
                ul {
                    display: block;
                }
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