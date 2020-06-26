import React from 'react'
import s from './users.module.css'
import Preloader from '../generic/Preloader/Preloader'
import { Search } from '../generic/styled-components/search.styled'
import User from './User'

const UsersList = ({ users, onSearch, posts }) => {
    return (
        <div className={s.users}>
            <Search type='text' alt='user-searching' placeholder='Search' onChange={onSearch} />

            <div className={s.usersList}>
            {!users ? <Preloader /> : users.map(user => (
                <User key={user._id} user={user} />
            ))}
            </div>
        </div>
    )
}

export default UsersList
