const mongoose = require('mongoose');

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
        dueDate: {
            type: Date,
            default: null,
        },
        reccurence: {
            type: String,
            default: "none",
        },
        uniqueDate: {
            type: Date,
            default: null,
        },
        overridden: {
            type: Boolean,
            default: false,
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Post', postSchema);