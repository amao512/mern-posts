import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    if((isAuth && rest.path === '/login') || (isAuth && rest.path === '/register')){
        return <Redirect to='/feed' />
    }
    
    return (
        <Route {...rest} 
               render={props => isAuth ? <Component {...props} /> : <Redirect to='/login' />} 
        />
    )
}

const mstp = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mstp)(PrivateRoute)