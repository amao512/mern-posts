import React, { useState, useEffect } from 'react'
import UsersList from '../components/UsersList/UsersList'
import Preloader from '../components/generic/Preloader/Preloader'
import { connect } from 'react-redux'


const Users = ({ users, userId }) => {
    const [filteredUsers, setFilteredUsers] = useState([])

    const onSearch = e => {
        const reg = new RegExp(e.target.value, 'gi')

        setFilteredUsers(() => {
            return users.filter(user => user._id !== userId).filter(user => {
                return user.name.match(reg) || user.lastName.match(reg)
            })
        })
    }

    useEffect(() => {
        setFilteredUsers(users && users.filter(user => user._id !== userId))
    }, [users, userId])

    if(!users){
        return <Preloader />
    }

    return <UsersList users={filteredUsers} onSearch={onSearch} />
}

const mstp = state => ({
    users: state.user.users,
    userId: state.auth.userId
})

export default connect(mstp)(Users)
