const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    type: {
        type: String,
        required: [true, 'Type is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'User ID is required']
    }
});

module.exports = userSchema;