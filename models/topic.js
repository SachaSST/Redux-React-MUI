import mongoose, { Schema } from "mongoose";


const topicSchema = new Schema({
    todo: string,
}, 
{
    timestamps: true,
});


const Topic = mongoose.model.Topic || mongoose.model("Topic", topicSchema);  

export default Topic;