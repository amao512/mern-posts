import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import { getLikesThunk, getDislikesThunk } from '../../redux/thunks/likesDislikesThunk'
import { connect } from 'react-redux'
import { deleteCommentThunk, getCommentsThunk } from '../../redux/thunks/commentsThunk'

const CommentContainer = ({ comment, userId, users, getLikesThunk, getDislikesThunk, likes, dislikes, token, deleteCommentThunk, getCommentsThunk }) => {
    const [owner, setOwner] = useState(null)
    const [certainLikes, setCertainLikes] = useState([])
    const [certainDislikes, setCertainDislikes] = useState([])

    const onDelete = async () => {
        await deleteCommentThunk(comment._id, token)
        getCommentsThunk()
    }

    useEffect(() => {
        setOwner(users && users.find(user => user._id === comment.owner))
    }, [users, comment])

    useEffect(() => {
        getLikesThunk()
        getDislikesThunk()
    }, [getLikesThunk, getDislikesThunk])

    useEffect(() => {
        setCertainLikes(likes.filter(like => like.commentId === comment._id))
        setCertainDislikes(dislikes.filter(dislike => dislike.commentId === comment._id))
    }, [likes, comment])

    return <Comment userId={userId} 
                    comment={comment} 
                    owner={owner}
                    likes={certainLikes}
                    dislikes={certainDislikes}
                    onDelete={onDelete}
            />
}


const mstp = state => ({
    userId: state.auth.userId,
    users: state.user.users,
    likes: state.likesDislikes.likes,
    dislikes: state.likesDislikes.dislikes,
    token: state.auth.token
})

export default connect(mstp, { getLikesThunk, getDislikesThunk, deleteCommentThunk, getCommentsThunk })(CommentContainer)

