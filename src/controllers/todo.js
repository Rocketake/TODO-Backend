import createHttpError from 'http-errors';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from '../services/todo.js';

export const getAllTodosController = async (req, res) => {
  const todo = await getAllTodos();
  res.status(200).json({
    status: 200,
    message: 'Successfully found todos!',
    data: todo,
  });
};

export const createTodoController = async (req, res) => {
  const todo = await createTodo(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a todo!`,
    data: todo,
  });
};

export const deleteTodoController = async (req, res, next) => {
  const { todoId } = req.params;
  const todo = await deleteTodo(todoId);
  if (!todo) {
    throw new createHttpError(404, 'Todo not found');
  }

  res.status(204).send();
};

export const patchTodoController = async (req, res, next) => {
  const { todoId } = req.params;
  const result = await updateTodo(todoId, req.body);

  if (!result) {
    throw new createHttpError(404, 'Todo not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched a todo!`,
    data: result,
  });
};
