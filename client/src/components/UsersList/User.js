import React, { useState, useEffect } from 'react'
import { UserCard } from './user.styled'
import { NavLink } from 'react-router-dom'
import UserPhoto from '../generic/UserPhoto/UserPhoto'
import { connect } from 'react-redux'
import { getPostsThunk } from '../../redux/thunks/postsThunk'

const User = ({ user, posts, getPostsThunk }) => {
    const [userPosts, setUserPosts] = useState([])

    useEffect(() => {
        getPostsThunk()
    }, [])

    useEffect(() => {
        setUserPosts(posts && posts.filter(post => post.owner === user._id))
    }, [getPostsThunk])

    return (
        <UserCard key={user && user._id}>
            <NavLink to={user && `/profile/${user._id}`}>
                <div className='user-img'>
                    <UserPhoto owner={user && user._id} />
                </div>

                <div className='name'>
                    <p>{user && `${user.name} ${user.lastName}`}</p>
                </div>
                
                <div className='email'>
                    <p>{user && user.email}</p>
                </div>

                <div className='info'>
                    <p>posts: {userPosts ? userPosts.length : '-'}</p>
                </div>
            </NavLink>
        </UserCard>
    )
}

const mstp = state => ({
    posts: state.post.posts
})

export default connect(mstp, { getPostsThunk })(User)
