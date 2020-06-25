import React, { useState, useEffect } from 'react'
import Post from './Post'
import { connect } from 'react-redux'
import { deletePostThunk } from '../../redux/thunks/postsThunk'
import { getCommentsThunk } from '../../redux/thunks/commentsThunk'
import { getLikesThunk, getDislikesThunk } from '../../redux/thunks/likesDislikesThunk'

const PostContainer = ({ post, users, deletePostThunk, token, userId, isReading = false, comments, getCommentsThunk, likes, getLikesThunk, getDislikesThunk, dislikes }) => {
    const [user, setUser] = useState(null)
    const [certainComments, setCertainComments] = useState([])
    const [certainLikes, setCertainLikes] = useState([])
    const [certainDislikes, setCertainDislikes] = useState([])

    const onDeletePost = () => {
        deletePostThunk(post._id, token)
    }

    useEffect(() => {
        getLikesThunk()
        getDislikesThunk()
    }, [getLikesThunk, getDislikesThunk])

    useEffect(() => {
        setCertainLikes(likes.filter(like => like.postId === post._id))
        setCertainDislikes(dislikes.filter(dislike => dislike.postId === post._id))
    }, [likes, post])

    useEffect(() => {
        setUser(users && users.find(user => user._id === post.owner))
    }, [users, post])

    useEffect(() => {
        setCertainComments(comments && comments.filter(comment => comment.post === post._id))
    }, [comments, post])

    useEffect(() => {
        getCommentsThunk()
    }, [getCommentsThunk])

    return <Post post={post} 
                 isAdmin={post.owner === userId} 
                 user={user} 
                 onDeletePost={onDeletePost} 
                 isReading={isReading}
                 comments={certainComments}
                 likes={certainLikes}
                 dislikes={certainDislikes}
            />
}

const mstp = state => ({
    token: state.auth.token,
    users: state.user.users,
    userId: state.auth.userId,
    comments: state.comment.comments,
    likes: state.likesDislikes.likes,
    dislikes: state.likesDislikes.dislikes
})

export default connect(mstp, { deletePostThunk, getCommentsThunk, getLikesThunk, getDislikesThunk })(PostContainer)
