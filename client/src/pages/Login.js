import React, { useState, useEffect } from 'react'
import { SignInUp, Form } from '../components/styled-components/form.styled'
import { Link } from 'react-router-dom'
import { Error } from '../components/styled-components/error.styled'
import { connect } from 'react-redux'
import { authLoginThunk } from '../redux/thunks/authThunks'
import { clearAuthError } from '../redux/actions/authActions'
 
const Login = ({ error, clearAuthError, authLoginThunk, isAuth, ...props }) => {
    
    const [form, setForm] = useState({ email: '', password: '' })
    const [formError, setFormError] = useState(null)

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
        clearAuthError()
        setFormError(null)
    }

    const onSubmit = e => {
        e.preventDefault()

        clearAuthError()
        setFormError(null)
        authLoginThunk(form)

        if(isAuth){
            props.history.push('/feed')
        }
    }

    useEffect(() => {
        if(error){
            setFormError(error)
            clearAuthError()
        }
    }, [error, clearAuthError])

    return (
        <SignInUp>
            <h1>Sign In</h1>

            <Form onSubmit={onSubmit}>
                <input type='text' 
                       placeholder='Email' 
                       alt='email' 
                       name='email' 
                       value={form.email}
                       onChange={handleChange} 
                />
                <input type='password' 
                       placeholder='Password' 
                       alt='password' 
                       name='password' 
                       value={form.password}
                       onChange={handleChange} 
                />

                <button>Sign In</button>
            </Form>

            {formError && <Error>{formError}</Error> }

            <div className='question'>
                <p>Don't have an account? <Link to='/register'>Register</Link> </p>
            </div>
        </SignInUp>
    )
}

const mstp = state => ({
    error: state.auth.error,
    isAuth: state.auth.isAuth
})

export default connect(mstp, { clearAuthError, authLoginThunk })(Login)
