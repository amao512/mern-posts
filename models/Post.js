const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    title: { type: String, required: true },
    text: { type: String },
    views: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
    owner: { type: Types.ObjectId, ref: 'user' },
    comments: [{ type: Types.ObjectId, ref: 'comment' }]
})

module.exports = model('post', schema)