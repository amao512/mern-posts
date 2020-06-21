import React, { useState, useEffect } from 'react'
import PostContainer from '../components/Posts/PostContainer'
import Preloader from '../components/generic/Preloader/Preloader'
import Comments from '../components/Comments/Comments'
import { getCommentsThunk } from '../redux/thunks/commentsThunk'
import { getOnePostThunk } from '../redux/thunks/postsThunk'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'

const SinglePost = ({ posts, getOnePostThunk, comments, getCommentsThunk }) => {  
    const postId = useParams().postId
    const [certainPost, setCertainPost] = useState(null)
    const [certainComments, setCertainComments] = useState([])

    useEffect(() => {
        getOnePostThunk(postId)
    }, [getOnePostThunk, postId])
    
    useEffect(() => {
        setCertainPost(posts && posts.find(post => post._id === postId))
    }, [posts, postId])

    useEffect(() => {
        getCommentsThunk()
    }, [getCommentsThunk])

    useEffect(() => {
        setCertainComments(comments && comments.filter(comment => comment.post === postId))
    }, [comments, postId])

    if(!certainPost){
        return <Preloader/>
    }

    return (
        <div>
            <PostContainer post={certainPost} isReading={true} />
            <Comments comments={certainComments} postId={postId} />
        </div>
    )
}

const mstp = state => ({
    posts: state.post.posts,
    comments: state.comment.comments
})

export default connect(mstp, { getOnePostThunk, getCommentsThunk })(SinglePost)
