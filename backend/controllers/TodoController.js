import TodoModel from '../model/TodoModel.js'

class TodoController{
    static async addTodo(req, res){
        try {
            const newTodo = new TodoModel(req.body);
            newTodo.save()
            res.status(201).json(newTodo)
        } catch (error) {
            res.status(500).json({message: error})
        }
    }
    
    static async getTodo(req, res){
        try {
            const todoFetch = await TodoModel.find()
            res.status(200).json(todoFetch)

        } catch (error) {
            res.status(500).json({message: error})
        }
    }
}

export default TodoController
