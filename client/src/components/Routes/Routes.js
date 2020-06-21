import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../pages/home'
import Create from '../../pages/create'
import Login from '../../pages/login'
import Register from '../../pages/register'
import PageError from '../../pages/404'
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import Edit from '../../pages/edit'
import Profile from '../../pages/profile'
import Users from '../../pages/users'
import SinglePost from '../../pages/singlePost'

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
