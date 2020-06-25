import styled from "styled-components";

export const LikeDislikeStyled = styled.div`
    display: flex;
    flex-direction: center;
    align-items: center;
    a {
        text-decoration: none;
        color: #222;
        display: flex;
        flex-direction: center;
        align-items: center;
    }
    span {
        margin-right: 5px;
        font-size: 18px;
    }
    p { 
        font-size: 13px; 
    }
    
    .like,
    .dislike {
        display: flex;
        flex-direction: raw;
        align-items: center;
        span {
            cursor: pointer;
        }
        .count {
            font-size: 13px;
        }
    }

    .like {
        margin-right: 10px;
        span {
            color: ${props => props.liked ? 'rgb(17,166,240)' : '#222'};
        }
    }

    .dislike {
        margin-right: 10px;
        span {
            color: ${props => props.disliked ? 'rgb(17,166,240)' : '#222'};
        }
    }
`