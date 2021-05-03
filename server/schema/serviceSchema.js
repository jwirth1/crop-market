const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    service_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Service ID is required']
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

module.exports = serviceSchema;