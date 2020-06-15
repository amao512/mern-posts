import { GET_USERS } from "../constants";

export const getUsers = users => ({ type: GET_USERS, payload: users })