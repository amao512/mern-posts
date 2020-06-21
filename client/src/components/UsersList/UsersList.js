import React from 'react'
import s from './users.module.css'
import Preloader from '../generic/Preloader/Preloader'
import UserPhoto from '../generic/UserPhoto/UserPhoto'
import { NavLink } from 'react-router-dom'
import { Search } from '../generic/styled-components/search.styled'
import { UserCard } from './user.styled'

const UsersList = ({ users, onSearch }) => {
    return (
        <div className={s.users}>
            <Search type='text' alt='user-searching' placeholder='Search' onChange={onSearch} />

            <div className={s.usersList}>
            {!users ? <Preloader /> : users.map(user => (
                <UserCard key={user && user._id}>
                    <NavLink to={user && `/profile/${user._id}`}>
                        <div className='user-img'>
                            <UserPhoto owner={user && user._id} />
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
