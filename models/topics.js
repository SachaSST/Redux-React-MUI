import mongoose, { Schema } from 'mongoose';

const topicSchema = new Schema({
  todo: { type: String, required: true },
  date: { type: String, required: true },
}, {
  timestamps: true,
});

const Topic = mongoose.models.Topic || mongoose.model('Topic', topicSchema);

export default Topic;
