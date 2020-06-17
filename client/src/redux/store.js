import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import { postsReducer } from './reducers/postsReducer'
import { usersReducer } from './reducers/usersReducer'
import { commentsReducer } from './reducers/commentsReducer'

const reducers = combineReducers({
    auth: authReducer,
    post: postsReducer,
    user: usersReducer,
    comment: commentsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

window.store = store

export default store