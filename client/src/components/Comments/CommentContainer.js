import React, { useState, useEffect } from 'react'
import Comment from './Comment'
import { getLikesThunk, getDislikesThunk } from '../../redux/thunks/likesDislikesThunk'
import { connect } from 'react-redux'
import { deleteCommentThunk, getCommentsThunk, updateCommentThunk } from '../../redux/thunks/commentsThunk'

const CommentContainer = ({ comment, userId, postId, users, getLikesThunk, getDislikesThunk, likes, dislikes, token, deleteCommentThunk, getCommentsThunk, updateCommentThunk }) => {
    const [owner, setOwner] = useState(null)
    const [certainLikes, setCertainLikes] = useState([])
    const [certainDislikes, setCertainDislikes] = useState([])
    const [editing, setEditing] = useState(false)
    const [editingText, setEditingText] = useState('')

    const onDelete = async () => {
        await deleteCommentThunk(comment._id, token)
        getCommentsThunk()
    }

    const onEdit = () => {
        setEditingText(comment.text)
        setEditing(true)
    }

    const onUpdate = async () => {
        await updateCommentThunk(comment._id, postId, editingText, token)
        getCommentsThunk()
        setEditing(false)
    }

    console.log(editingText)

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
    }, [likes, comment, dislikes])

    return <Comment userId={userId} 
                    comment={comment} 
                    owner={owner}
                    likes={certainLikes}
                    dislikes={certainDislikes}
                    onDelete={onDelete}
                    editing={editing}
                    editingText={editingText}
                    onEdit={onEdit}
                    setEditingText={setEditingText}
                    onUpdate={onUpdate}
            />
}


const mstp = state => ({
    userId: state.auth.userId,
    users: state.user.users,
    likes: state.likesDislikes.likes,
    dislikes: state.likesDislikes.dislikes,
    token: state.auth.token
})

export default connect(mstp, { getLikesThunk, getDislikesThunk, deleteCommentThunk, getCommentsThunk, updateCommentThunk })(CommentContainer)

