import React from 'react'
import { LikeDislikeStyled } from './likeDislike.styled'

const LikeDislike = ({ liked = false, disliked = false, likesCount = 0, dislikesCount = 0, onLike, onDislike }) => {
    return (
        <LikeDislikeStyled liked={liked} disliked={disliked}>
            <div className='like' onClick={onLike}>
                <span className="material-icons">thumb_up</span>
                <span className='count'>{likesCount}</span>
            </div>

            <div className='dislike' onClick={onDislike}>
                <span className="material-icons">thumb_down</span>
                <span className='count'>{dislikesCount}</span>
            </div>
        </LikeDislikeStyled>
    )
}

export default LikeDislike
