import { UsersAPI } from "../../api"
import { getUsers } from '../actions/usersActions'

export const getUsersThunk = () => async dispatch => {
    const users = await UsersAPI.get()

    return dispatch(getUsers(users))
}