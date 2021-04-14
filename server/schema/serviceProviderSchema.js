const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
    provider_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Provider ID is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
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

module.exports = serviceProviderSchema;