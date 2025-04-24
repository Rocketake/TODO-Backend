import { Router } from 'express';
import {
  getAllTodosController,
  createTodoController,
  deleteTodoController,
  patchTodoController,
} from '../controllers/todo.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const router = Router();

router.get('/todo', ctrlWrapper(getAllTodosController));

router.post('/todo', ctrlWrapper(createTodoController));

router.delete('/todo/:todoId', ctrlWrapper(deleteTodoController));

router.patch('/todo/:todoId', ctrlWrapper(patchTodoController));
export default router;
