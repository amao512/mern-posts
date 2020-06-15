import React from 'react'
import { NavLink } from 'react-router-dom'

const UnauthroizedPage = () => {
    return (
        <div className='unauthorized'>
            <h1>You are not authorized</h1>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
    )
}

export default UnauthroizedPage
