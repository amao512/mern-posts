import React, { useEffect } from 'react'
import { ProfileBlock } from '../components/styled-components/profile.styled'
import profilePhoto from '../assets/images/profile.png'
import Posts from '../components/Posts/Posts'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostsThunk } from '../redux/thunks/postsThunk'
import { useState } from 'react'

const Profile = ({ posts, userId, getPostsThunk, users, adminUser }) => {
    const [user, setUser] = useState(null)
    const [filteredPosts, setFilteredPosts] = useState([])
    const id = useParams().id

    useEffect(() => {
        getPostsThunk()
    }, [getPostsThunk])

    useEffect(() => {
        setUser(() => {
            return id ? users && users.find(user => user._id === id) : adminUser
        })
    }, [id, users, adminUser])
    
    useEffect(() => {
        setFilteredPosts(posts && posts.filter(post => id ? (post.owner === id) : (post.owner === userId)))
    }, [posts, id, userId])

    return (
        <div className='profile'>
            <ProfileBlock>
                <div className='profile-info'>
                    <div className='photo'>
                        <img src={profilePhoto} alt='user-img' />
                    </div>

                    <div className='name'>
                        <p>{user && `${user.name} ${user.lastName}`}</p>
                    </div>
                    
                    <div className='email'>
                        <p>{user && user.email}</p>
                    </div>
                </div>
            </ProfileBlock>

            {filteredPosts && <Posts isAdmin={id === undefined} posts={filteredPosts} />}
        </div>
    )
}

const mstp = state => ({
    posts: state.post.posts,
    adminUser: state.auth.user,
    userId: state.auth.userId,
    users: state.user.users
})

export default connect(mstp, { getPostsThunk })(Profile)
