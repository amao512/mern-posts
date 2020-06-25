import styled from "styled-components";

export const LikeDislikeStyled = styled.div`
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