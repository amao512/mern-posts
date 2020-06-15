import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deletePostThunk } from '../redux/thunks/postsThunk'
import Post from '../components/Post'
import Preloader from '../components/Preloader/Preloader'

const PostContainer = ({ post, admin, users, deletePostThunk, token, isReading = false }) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [user, setUser] = useState(null)

    const onDeletePost = () => {
        deletePostThunk(post._id, token)
    }

    useEffect(() => {
        setUser(users && users.find(user => user._id === post.owner))
    }, [users, post])

    useEffect(() => {
        setIsAdmin((admin && admin._id) === (user && user._id))
    }, [user, admin])
    

    const nextProps = { post, admin, isAdmin, user, onDeletePost, isReading }

    if(!post){
        return <Preloader />
    }

    return <Post {...nextProps} />
}

const mstp = state => ({
    admin: state.auth.user,
    token: state.auth.token,
    users: state.user.users
})

export default connect(mstp, { deletePostThunk })(PostContainer)
