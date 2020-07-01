const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
const config = require('config')

const app = express()
const PORT = process.env.PORT || 5000

app.use(bodyParser.json())

const connectDB = async () => {
    try {
        await mongoose.connect(config.get('mongoUri')  /* process.env.MONGO_URI */, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('MongoDB connected...')
        app.listen(PORT, () => console.log('Server started...'))
    } catch (e) {
        console.log(e.message)
        process.exit()
    }
}

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
}

connectDB()

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/posts', require('./routes/post.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/comments', require('./routes/comment.routes'))
app.use('/api/profile', require('./routes/profile.routes'))
app.use('/api/files', require('./routes/file.routes'))
app.use('/api/likeDislike', require('./routes/likeDislike.routes'))