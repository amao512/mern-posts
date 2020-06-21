import React, { useEffect } from 'react'
import Posts from '../components/Posts/Posts'
import Preloader from '../components/generic/Preloader/Preloader'
import { getPostsThunk } from '../redux/thunks/postsThunk'
import { connect } from 'react-redux'

const Home = ({ posts, getPostsThunk }) => {
  
    useEffect(() => {
        if(!posts){
            getPostsThunk()
        }
    }, [getPostsThunk, posts])

    if(!posts){
        return <Preloader />
    }

    return <Posts posts={posts}  />
}

const mstp = state => ({
    posts: state.post.posts
})

export default connect(mstp, { getPostsThunk })(Home)
