const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Review ID is required']
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    rating: {
        type: Number,
        reqruired: [true, 'Rating is required']
    },
    description: {
        type: String
    }
});

module.exports = reviewSchema;