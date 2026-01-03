/*
    title : string,
    description : string,
    completed : boolean,
    id : string,
 */
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/todo")

const todoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    completed : {
        type : Boolean,
        required : true,
        default : false,
    },
})
const todo = mongoose.model("Todo", todoSchema);

export default todo;