import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import NavbarContainer from './containers/NavbarContainer'
import { connect } from 'react-redux'
import { getAuthStorageThunk, getAuthDataThunk } from './redux/thunks/authThunks'
import Routes from './components/Routes'
import { getUsersThunk } from './redux/thunks/usersThunk'
import { getPostsThunk } from './redux/thunks/postsThunk'

const App = ({ isAuth, getAuthStorageThunk, getUsersThunk, getPostsThunk, getAuthDataThunk }) => {

  useEffect(() => {
    getAuthStorageThunk()
  }, [getAuthStorageThunk])

  useEffect(() => {
    getAuthDataThunk()
  }, [getAuthDataThunk])

  useEffect(() => {
    getUsersThunk()
  }, [getUsersThunk])

  useEffect(() => {
    getPostsThunk()
  }, [getPostsThunk])

  return (
        <div className='App'>
          {isAuth && <Header />}

          <div className='main-container'>
            <Routes />
            
            {isAuth && <NavbarContainer /> }
          </div>
        </div>
  );
}

const mstp = state => ({
  isAuth: state.auth.isAuth
})

export default connect(mstp, { getAuthStorageThunk, getUsersThunk, getPostsThunk, getAuthDataThunk })(App)
