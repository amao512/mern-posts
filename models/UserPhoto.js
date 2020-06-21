const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    filename: { type: String, required: true },
    uploadId: { type: Types.ObjectId, required: true },
    owner: { type: Types.ObjectId, ref: 'user' },
    date: { type: Date, default: Date.now }
})

module.exports = model('user.photo', schema)