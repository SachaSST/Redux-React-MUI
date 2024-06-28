import mongoose, { Schema } from "mongoose";
import { number } from "prop-types";


const topicSchema = new Schema({
    todo: string,
    date : string 
}, 
{
    timestamps: true,
});



const Topic = mongoose.model.Topic || mongoose.model("Topic", topicSchema);  

export default Topic;