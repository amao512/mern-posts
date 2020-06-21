import React, { useState, useEffect } from 'react'
import { SignInUp, Form } from '../components/generic/styled-components/form.styled'
import { Link, Redirect } from 'react-router-dom'
import { Error } from '../components/Auth/error.styled'
import { connect } from 'react-redux'
import { authRegisterThunk } from '../redux/thunks/authThunks'
import { clearAuthError } from '../redux/actions/authActions'

const Register = ({ authRegisterThunk, error, clearAuthError, isAuth, ...props }) => {
    const [form, setForm] = useState({ name: '', lastName: '', email: '', password: '', confirmPassword: '' })
    const [formError, setFormError] = useState(null)

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
        clearAuthError()
        setFormError(null)
    }

    const onSubmit = e => {
        e.preventDefault()

        if(form.password !== form.confirmPassword){
            return setFormError('Passwords do not match')
        }

        clearAuthError()
        setFormError(null)

        authRegisterThunk(form)

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

    if(isAuth){
        return <Redirect to='/feed' />
    }

    return (
        <SignInUp>
            <h1>Sign up</h1>

            <Form onSubmit={onSubmit}>
                <input type='text' 
                       placeholder='Name' 
                       name='name' 
                       alt='name' 
                       onChange={handleChange}
                />
                <input type='text' 
                       placeholder='Last Name' 
                       name='lastName' 
                       alt='lastName'
                       onChange={handleChange}
                />
                <input type='email' 
                       placeholder='Email' 
                       name='email' 
                       alt='email' 
                       onChange={handleChange}
                />
                <input type='password' 
                       placeholder='Password' 
                       name='password' 
                       alt='password' 
                       onChange={handleChange}
                />
                <input type='password' 
                       placeholder='Confirm Password' 
                       name='confirmPassword' 
                       alt='confirmPassword' 
                       onChange={handleChange}
                />

                <button>Sign up</button>
            </Form>

            {formError && <Error>{formError}</Error> }

            <div className='question'>
                <p>Already have an account? <Link to='/login'>Login</Link> </p>
            </div>
        </SignInUp>
    )
}

const mstp = state => ({
    error: state.auth.error,
    isAuth: state.auth.isAuth
})

export default connect(mstp, { authRegisterThunk, clearAuthError })(Register)
