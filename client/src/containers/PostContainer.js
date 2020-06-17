import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deletePostThunk } from '../redux/thunks/postsThunk'
import Post from '../components/Post'
import Preloader from '../components/Preloader/Preloader'
import { getCommentsThunk } from '../redux/thunks/commentsThunk'

const PostContainer = ({ post, users, deletePostThunk, token, userId, isReading = false, comments, getCommentsThunk }) => {
    const [user, setUser] = useState(null)
    const [certainComments, setCertainComments] = useState([])

    const onDeletePost = () => {
        deletePostThunk(post._id, token)
    }

    useEffect(() => {
        setUser(users && users.find(user => user._id === post.owner))
    }, [users, post])

    useEffect(() => {
        setCertainComments(comments && comments.filter(comment => comment.post === post._id))
    }, [comments, post])

    useEffect(() => {
        getCommentsThunk()
    }, [getCommentsThunk])

    if(!post){
        return <Preloader />
    }

    return <Post post={post} 
                 isAdmin={post.owner === userId} 
                 user={user} 
                 onDeletePost={onDeletePost} 
                 isReading={isReading}
                 comments={certainComments}
            />
}

const mstp = state => ({
    token: state.auth.token,
    users: state.user.users,
    userId: state.auth.userId,
    comments: state.comment.comments
})

export default connect(mstp, { deletePostThunk, getCommentsThunk })(PostContainer)
