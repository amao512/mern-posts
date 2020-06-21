import React from 'react'
import { HeaderShapka } from './header.styled'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <HeaderShapka>
            <div className='header-container'>
                <div className='logo'>
                    <NavLink to='/feed'>
                        <h1>MERN</h1>
                        <span>Posts</span>   
                    </NavLink>
                </div>
            </div>
        </HeaderShapka>
    )
}
export default Header
