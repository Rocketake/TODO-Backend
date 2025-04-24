import { Router } from 'express';
import {
  getAllTodosController,
  createTodoController,
  deleteTodoController,
  patchTodoController,
} from '../controllers/todo.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const todoRouter = Router();

todoRouter.get('/', ctrlWrapper(getAllTodosController));

todoRouter.post('/', ctrlWrapper(createTodoController));

todoRouter.delete('/:todoId', ctrlWrapper(deleteTodoController));

todoRouter.patch('/:todoId', ctrlWrapper(patchTodoController));
export default todoRouter;
