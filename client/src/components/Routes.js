import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home'
import Create from '../pages/Create'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PageError from '../pages/404'
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import Edit from '../pages/Edit'
import Profile from '../pages/Profile'
import Users from '../pages/Users'
import SinglePost from '../pages/SinglePost'

const Routes = ({ isAuth }) => {

    if(!isAuth){
        return (
            <Switch>
                <Route exact path='/login' component={Login} />
                  <Route exact path='/register' component={Register} />
                  <Route exact component={PageError} />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route exact path='/' render={() => <Redirect to='/feed' />} />
            <PrivateRoute path='/login' />
            <PrivateRoute path='/register' />

            <PrivateRoute exact path='/profile/:id?' component={Profile} />
            <PrivateRoute exact path='/feed' component={Home} />
            <PrivateRoute exact path='/users' component={Users} />
            <PrivateRoute exact path='/p/:postId' component={SinglePost} />
            <PrivateRoute exact path='/create' component={Create} />
            <PrivateRoute exact path='/edit/:id' component={Edit} />

            <Route exact component={PageError} />
        </Switch>
    )
}

const mstp = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mstp)(Routes)
