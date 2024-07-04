const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
        message : {
            type: String,
            required: true
        },
        author : {
            type: String,
            required: true
        },
        date : {
            type: Date,
            default: Date.now
        },

        completedtasks : {
            type: [String],
        },
    },
    {
        timestamps: true,
    }


);


module.exports = mongoose.model('Post', postSchema);