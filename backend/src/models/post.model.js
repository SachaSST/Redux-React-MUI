const mongoose = require('mongoose');
const { bool } = require('prop-types');

const postSchema = new mongoose.Schema(
    {
        message: {
            type: String,
            required: true,
            trim: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        date: {
            type: Date,
            default: Date.now,
        },
        reccurence: {
            type: String,
            default: "daily",
        }
    },
    {
        timestamps: true,
    }


);


module.exports = mongoose.model('Post', postSchema);