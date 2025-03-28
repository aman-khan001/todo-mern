import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: String,
    date: String
})

const TodoModel = mongoose.model('todo', TodoSchema)

export default TodoModel
