import React from 'react'
import { UserCard } from '../styled-components/UserCard'
import UserImg from '../../assets/images/profile.png'
import s from './users.module.css'
import Preloader from '../Preloader/Preloader'
import { NavLink } from 'react-router-dom'
import { Search } from '../styled-components/search.styled'

const UsersList = ({ users, onSearch }) => {
    return (
        <div className={s.users}>
            <Search type='text' alt='user-searching' placeholder='Search' onChange={onSearch} />

            <div className={s.usersList}>
            {!users ? <Preloader /> : users.map(user => (
                <UserCard key={user && user._id}>
                    <NavLink to={user && `/profile/${user._id}`}>
                        <div className='user-img'>
                            <img src={UserImg} alt='user-img' />
                        </div>

                        <div className='name'>
                            <p>{user && `${user.name} ${user.lastName}`}</p>
                        </div>
                        
                        <div className='email'>
                            <p>{user && user.email}</p>
                        </div>
                    </NavLink>
                </UserCard>
            ))}
            </div>
        </div>
    )
}

export default UsersList
