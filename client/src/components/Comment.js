import React, { useState, useEffect } from 'react'
import { CommentStyled } from './styled-components/Comment.styled'
import InfoHead from './common/InfoHead'
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
        </CommentStyled>
    )
}

const mstp = state => ({
    userId: state.auth.userId,
    users: state.user.users
})

export default connect(mstp, {})(Comment)
