const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
    farmer_id: {
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
        type: String
    },
    location: {
        type: String
    },
    contact: {
        type: String
    }
});

module.exports = farmerSchema;