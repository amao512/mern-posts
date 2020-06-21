import React, { useEffect } from 'react'
import { ProfileBlock } from '../components/styled-components/profile.styled'
import Posts from '../components/Posts/Posts'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPostsThunk } from '../redux/thunks/postsThunk'
import { getProfileDataThunk } from '../redux/thunks/profileThunks'
import { useState } from 'react'
import Preloader from '../components/Preloader/Preloader'
import { getFilesThunk, deleteFileThunk, uploadImgThunk } from '../redux/thunks/fileThunks'
import UserPhoto from '../components/UserPhoto'
import { PopUp } from '../components/styled-components/PopUp.styled'

const Profile = ({ posts, userId, getPostsThunk, users, profile, token, uploadImgThunk, getProfileDataThunk, getFilesThunk, deleteFileThunk, files }) => {
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
            <ProfileBlock>
                <div className='profile-info'>
                    <div onClick={() => !id && setPopup(true)} className='photo'>
                        <UserPhoto owner={user._id} />

                        {!id && <div className='choose-img'>
                                <span className="material-icons">create</span>
                            </div>
                        }
                    </div>

                    <div className='name'>
                        <p>{`${user.name} ${user.lastName}`}</p>
                    </div>
                    
                    <div className='email'>
                        <p>{user.email}</p>
                    </div>
                </div>
            </ProfileBlock>

            {popup && <PopUp>

                    <ul className='content'>
                        <div className='close' onClick={() => setPopup(false)}>
                            <span className="material-icons">close</span>
                        </div>

                        <li>
                            <input type='file' 
                                name='file' 
                                id='file' 
                                accept='image/*'
                                onChange={fileSelectedHandler}
                            />

                            <label htmlFor='file'>Upload Image</label>
                        </li>

                        <li onClick={deletePhoto}>
                            <p>Delete</p>
                        </li>
                    </ul>
                </PopUp>
            }

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

export default connect(mstp, { getPostsThunk, uploadImgThunk, getProfileDataThunk, getFilesThunk, deleteFileThunk })(Profile)
