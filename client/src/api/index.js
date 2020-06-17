import axios from 'axios'
// const request = async (url, method, body = null, headers = {}, token = null) => {
//     try {
//         headers['Content-Type'] = 'application/json'

//         if(body){
//             body = JSON.stringify(body)
//             headers['Content-Type'] = 'application/json'
//         }

//         if(token){
//             headers['Content-Type'] = 'application/json'
//             headers['auth-token'] = token
//         }

//         const res = await fetch(url, { method, body, headers })
//         const data = await res.json()

//         if(!res.ok){
//             throw new Error(data.message)
//         }
        
//         return data
//     } catch (e) {
//         return e
//     }
// }

const instance = axios.create({
    baseUrl: 'http://localhost:5000',
    headers: { 'Content-Type': 'application/json' }
})

export const AuthAPI = {
    async login(userData){
        const res = await instance.post('/api/auth/login', userData)
        return res.data
    },
    async register(userData){
        const res = await instance.post('/api/auth/register', userData)
        return res.data
    },
    async getAuth(token){
        const res = await instance.get('/api/auth', { headers: { 'auth-token': token } })
        return res.data
    }
}

export const PostsAPI = {
    async get(){
        const res = await instance.get('/api/posts')
        return res.data
    },
    async create(postData, token){
        const res = await instance.post('/api/posts/create', postData, { headers: { 'auth-token': token } })
        return res.data
    },
    async delete(postId, token){
        const res = await instance.delete(`/api/posts/delete/${postId}`, { headers: { 'auth-token': token } })
        return res.data
    },
    async update(postData, token){
        const res = await instance.put(`/api/posts/update/${postData._id}`, postData, { headers: { 'auth-token': token } })
        return res.data
    },
    async getOne(id){
        const res = await instance.get(`/api/posts/${id}`)
        return res.data
    }
}

export const UsersAPI = {
    async get(){
        const res = await instance.get('/api/user')
        return res.data
    }
}