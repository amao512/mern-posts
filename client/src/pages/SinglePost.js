import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PostContainer from '../containers/PostContainer'
import { getOnePostThunk } from '../redux/thunks/postsThunk'
import Preloader from '../components/Preloader/Preloader'

const SinglePost = ({ posts, getOnePostThunk }) => {  
    const postId = useParams().postId
    const [certainPost, setCertainPost] = useState(null)
    
    useEffect(() => {
        setCertainPost(posts && posts.find(post => post._id === postId))
    }, [posts, postId])

    useEffect(() => {
        getOnePostThunk(postId)
    }, [getOnePostThunk, postId])

    if(!certainPost){
        return <Preloader/>
    }

    return (
        <div>
            <PostContainer post={certainPost} isReading={true} />
        </div>
    )
}

const mstp = state => ({
    posts: state.post.posts
})

export default connect(mstp, { getOnePostThunk })(SinglePost)
