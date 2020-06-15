import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './unauthorized.module.css'

const Unauthroized = () => {
    return (
        <div className={s.unauthorized}>
            <h1>You are not authorized</h1>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
        </div>
    )
}

export default Unauthroized
