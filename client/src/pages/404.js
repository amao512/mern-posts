import React from 'react'
import { connect } from 'react-redux'
import Unauthroized from '../components/Unauthorized/Unauthorized'
import PageNotFound from '../components/PageNotFound/PageNotFound'

const PageError = ({ isAuth }) => {
    if(!isAuth){
        return <Unauthroized />
    }

    return <PageNotFound />
}

const mstp = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mstp)(PageError)
