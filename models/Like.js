const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
    userId: { type: Types.ObjectId, ref: 'user' },
    postId: { type: Types.ObjectId, ref: 'post' },
    commentId: { type: Types.ObjectId, ref: 'comment' }
})

module.exports = model('like', schema)