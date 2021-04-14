const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    provider_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Farmer ID is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    crops: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Crop'
    }],
    desires: [{
        type: String
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    contact: {
        type: String,
        required: [true, 'Contact is required']
    }
});

module.exports = farmerSchema;