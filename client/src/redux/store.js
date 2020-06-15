import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { postsReducer } from './reducers/postsReducer'
import { usersReducer } from './reducers/usersReducer'

const reducers = combineReducers({
    auth: authReducer,
    post: postsReducer,
    user: usersReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store