import React, { useState } from 'react'
import { CreateForm } from '../components/styled-components/createForm.styled'
import { createPostThunk } from '../redux/thunks/postsThunk'
import { connect } from 'react-redux'

const Create = ({ createPostThunk, token, ...props }) => {
    const [form, setForm] = useState({ title: '', text: '' })

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onCreate = async () => {
        if(form.title !== '' && form.text !== ''){
            await createPostThunk(form, token)
            props.history.push('/profile')
        }
    }

    return (
        <CreateForm>
            <input type='text' 
                   name='title' 
                   placeholder='Title' 
                   alt='title'
                   value={form.title}
                   onChange={handleChange}
            />
            <textarea name='text' cols='100' value={form.text} onChange={handleChange}></textarea>

            <button onClick={onCreate}>Create</button>
        </CreateForm>
    )
}

const mstp = state => ({
    token: state.auth.token
})

export default connect(mstp, { createPostThunk })(Create)
