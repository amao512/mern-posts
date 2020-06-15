import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { authLogoutThunk, getAuthDataThunk } from '../redux/thunks/authThunks'

const NavbarContainer = ({ user, authLogoutThunk, getAuthDataThunk }) => {

    useEffect(() => {
        if(!user){
            getAuthDataThunk()
        }
    }, [getAuthDataThunk, user])

    const nextProps = { authLogoutThunk, user }

    return <Navbar {...nextProps} />
}

const mstp = state => ({
    user: state.auth.user
})

export default connect(mstp, { authLogoutThunk, getAuthDataThunk })(NavbarContainer)
