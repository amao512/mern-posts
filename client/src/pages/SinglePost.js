import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import PostContainer from '../containers/PostContainer'
import { getOnePostThunk } from '../redux/thunks/postsThunk'
import Preloader from '../components/Preloader/Preloader'
import Comments from '../components/Comments/Comments'
import { getCommentsThunk } from '../redux/thunks/commentsThunk'

const SinglePost = ({ posts, getOnePostThunk, comments, getCommentsThunk }) => {  
    const postId = useParams().postId
    const [certainPost, setCertainPost] = useState(null)
    const [certainComments, setCertainComments] = useState([])
    
    useEffect(() => {
        setCertainPost(posts && posts.find(post => post._id === postId))
    }, [posts, postId])

    useEffect(() => {
        getCommentsThunk()
    }, [getCommentsThunk, comments])

    useEffect(() => {
        setCertainComments(comments && comments.filter(comment => comment.post === postId))
    }, [comments, postId])

    useEffect(() => {
        getOnePostThunk(postId)
    }, [getOnePostThunk, postId])

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
