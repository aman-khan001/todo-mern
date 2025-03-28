import express from 'express'
import TodoController from "../controllers/TodoController.js";

const routes = express.Router()

routes.post('/add-todo', TodoController.addTodo)
routes.get('/', TodoController.getTodo)

export default routes
