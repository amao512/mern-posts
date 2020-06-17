const { Schema, Types, model } = require('mongoose')

const schema = new Schema({
    post: { type: Types.ObjectId, ref: 'Post' },
    owner: { type: Types.ObjectId, ref: 'User' },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now }
})

module.exports = model('comment', schema)