import React, { useEffect } from 'react'
import Posts from '../components/Posts/Posts'
import ProfilePopup from '../components/Profile/ProfilePopup'
import ProfileInfo from '../components/Profile/ProfileInfo'
import Preloader from '../components/generic/Preloader/Preloader'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostsThunk } from '../redux/thunks/postsThunk'
import { getProfileDataThunk } from '../redux/thunks/profileThunks'
import { useState } from 'react'
import { deleteFileThunk, uploadImgThunk } from '../redux/thunks/fileThunks'


const Profile = ({ posts, userId, getPostsThunk, users, profile, token, uploadImgThunk, getProfileDataThunk, deleteFileThunk, files }) => {
    const [user, setUser] = useState(null)
    const [filteredPosts, setFilteredPosts] = useState([])
    const [popup, setPopup] = useState(false)

    const id = useParams().id

    const fileSelectedHandler = e => {
        e.preventDefault()
        const file = e.target.files[0]
        
        const fd = new FormData()
        fd.append('img', file, file.name)

        uploadImgThunk(fd, token)
    }

    const deletePhoto = async () => {
        const deletedFile = await files.find(file => file.owner === userId)
        
        deleteFileThunk(deletedFile.uploadId, token)
    }

    useEffect(() => {
        getProfileDataThunk()
    }, [getProfileDataThunk])
    
    useEffect(() => {
        getPostsThunk()
    }, [getPostsThunk])

    useEffect(() => {
        setUser(() => {
            return id ? users && users.find(user => user._id === id) : profile
        })
    }, [id, users, profile])
    
    useEffect(() => {
        setFilteredPosts(posts && posts.filter(post => id ? (post.owner === id) : (post.owner === userId)))
    }, [posts, id, userId])

    if(!user){
        return <Preloader />
    }

    return (
        <div className='profile'>
            <ProfileInfo id={id} setPopup={setPopup} user={user} />

            {popup && <ProfilePopup setPopup={setPopup} deletePhoto={deletePhoto} fileSelectedHandler={fileSelectedHandler} />}

            {filteredPosts && <Posts isAdmin={id === undefined} posts={filteredPosts} />}
        </div>
    )
}

const mstp = state => ({
    posts: state.post.posts,
    profile: state.profile.data,
    userId: state.auth.userId,
    users: state.user.users,
    token: state.auth.token,
    image: state.profile.image,
    files: state.file.files
})

export default connect(mstp, { getPostsThunk, uploadImgThunk, getProfileDataThunk, deleteFileThunk })(Profile)
