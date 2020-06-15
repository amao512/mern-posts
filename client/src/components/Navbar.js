import React from 'react'
import { NavbarStyled } from './styled-components/navbar.styled'
import { NavLink } from 'react-router-dom'

const Navbar = ({ user, authLogoutThunk }) => {
    return (
        <div className='navbar'>
            <NavbarStyled>
                <ul>
                    <li className='profile'>
                        <NavLink to='/profile' activeClassName='active-link'>
                            <span className="material-icons">account_circle</span>
                            <p>{user ? `${user.name} ${user.lastName}` : 'Profile'}</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/feed' activeClassName='active-link'>
                            <span className="material-icons">home</span>
                            <p>Home</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/users' activeClassName='active-link'>
                            <span className="material-icons">group</span>
                            <p>Users</p>
                        </NavLink>
                    </li>
                    <li className='logout'>
                        <NavLink onClick={authLogoutThunk} to='/login'>
                            <span className="material-icons">exit_to_app</span>
                            <p>Logout</p>
                        </NavLink>
                    </li>
                </ul>
            </NavbarStyled>
        </div>
    )
}

export default Navbar
