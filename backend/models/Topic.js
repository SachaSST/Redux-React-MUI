const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topicSchema = new Schema({
  todo: { type: String, required: true },
  date: { type: String, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Topic', topicSchema);
