import React, { useState, useEffect } from 'react'
import InfoHead from '../generic/InfoHead/InfoHead'
import LikeDislikeContainer from '../LikeDislike/LikeDislikeContainer'
import { CommentStyled } from './comment.styled'
import { connect } from 'react-redux'

const Comment = ({ comment, userId, users }) => {
    const [owner, setOwner] = useState(null)

    useEffect(() => {
        setOwner(users && users.find(user => user._id === comment.owner))
    }, [users, comment])

    return (
        <CommentStyled>
            <InfoHead isAdmin={comment.owner === userId} user={owner} info={comment} onDelete={() => {}} />
            
            <p className='comment'>{comment.text}</p>

            <LikeDislikeContainer />
        </CommentStyled>
    )
}

const mstp = state => ({
    userId: state.auth.userId,
    users: state.user.users
})

export default connect(mstp)(Comment)
