const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')
const httpProxy = require('http-proxy')

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json({ extended: true }))

const connectDB = async () => {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('MongoDB connected...')

        app.listen(PORT, () => {
            httpProxy.createProxyServer({
                target: 'http://mern-posts.herokuapp.com',
                toProxy: true,
                changeOrigin: true,
                xfwd: true
            });

            console.log('Server started...')
        })
    } catch (e) {
        console.log(e.message)
        process.exit()
    }
}

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    })
}

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/posts', require('./routes/post.routes'))
app.use('/api/user', require('./routes/user.routes'))

connectDB()