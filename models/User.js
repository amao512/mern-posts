const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    dataCreated: { type: Date, default: Date.now },
    posts: [{ type: Types.ObjectId, ref: 'post' }]
})

module.exports = model('user', schema)