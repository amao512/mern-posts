import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { authLogoutThunk } from '../redux/thunks/authThunks'
import { getProfileDataThunk } from '../redux/thunks/profileThunks'

const NavbarContainer = ({ profile, authLogoutThunk, getAuthDataThunk }) => {

    useEffect(() => {
        if(!profile){
            getProfileDataThunk()
        }
    }, [profile])

    const nextProps = { authLogoutThunk, profile }

    return <Navbar {...nextProps} />
}

const mstp = state => ({
    profile: state.profile.data
})

export default connect(mstp, { authLogoutThunk, getProfileDataThunk })(NavbarContainer)
