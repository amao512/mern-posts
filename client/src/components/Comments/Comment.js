import React from 'react'
import InfoHead from '../generic/InfoHead/InfoHead'
import LikeDislikeContainer from '../LikeDislike/LikeDislikeContainer'
import { CommentStyled } from './comment.styled'

const Comment = ({ comment, userId, owner, likes, dislikes, onDelete }) => {
    return (
        <CommentStyled>
            <InfoHead isAdmin={comment.owner === userId} user={owner} info={comment} onDelete={onDelete} />
            
            <p className='comment'>{comment.text}</p>

            <LikeDislikeContainer infoId={comment._id} 
                                  comment={true}
                                  likes={likes}
                                  dislikes={dislikes}
            />
        </CommentStyled>
    )
}

export default Comment
