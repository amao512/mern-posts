import React, { useEffect, useState } from 'react'
import { getFilesThunk } from '../redux/thunks/fileThunks'
import { connect } from 'react-redux'
import profilePhoto from '../assets/images/profile.png'
import Preloader from './Preloader/Preloader'

const UserPhoto = ({ getFilesThunk, owner, files }) => {
    const [photo, setPhoto] = useState(null)

    useEffect(() => {
        getFilesThunk()
    }, [getFilesThunk])

    useEffect(() => {
        setPhoto(files.find(file => file.owner === owner))
    }, [files, owner])

    if(!files){
        return <Preloader />
    }

    return <img src={photo ? `/api/files/${photo.filename}` : profilePhoto} alt='user-img' />
}

const mstp = state => ({
    files: state.file.files
})

export default connect(mstp, { getFilesThunk })(UserPhoto)
