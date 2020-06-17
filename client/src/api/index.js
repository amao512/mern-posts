const request = async (url, method, body = null, headers = {}, token = null) => {
    try {
        headers['Content-Type'] = 'application/json'

        if(body){
            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'
        }

        if(token){
            headers['Content-Type'] = 'application/json'
            headers['auth-token'] = token
        }

        const res = await fetch(url, { method, body, headers })
        const data = await res.json()

        if(!res.ok){
            throw new Error(data.message)
        }
        
        return data
    } catch (e) {
        return e
    }
}

export const AuthAPI = {
    async login(userData){
        return await request('/api/auth/login', 'POST', userData)
    },
    async register(userData){
        return await request('/api/auth/register', 'POST', userData)
    },
    async getAuth(token){
        return await request('/api/auth', 'GET', null, {}, token)
    }
}

export const PostsAPI = {
    async get(token = null){
        return await request(token ? '/api/posts/own' : '/api/posts', 'GET', null, {}, token)
    },
    async create(postData, token){
        return await request('/api/posts/create', 'POST', postData, {}, token)
    },
    async delete(postId, token){
        return await request(`/api/posts/delete/${postId}`, 'DELETE', null, {}, token)
    },
    async update(postData, token){
        return await request(`/api/posts/update/${postData._id}`, 'PUT', postData, {}, token)
    },
    async getOne(id){
        return await request(`/api/posts/${id}`, 'GET')
    }
}

export const UsersAPI = {
    async get(){
        return await request('/api/user', 'GET')
    }
}