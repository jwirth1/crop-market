const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
    crop_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Crop ID is required']
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

module.exports = cropSchema;