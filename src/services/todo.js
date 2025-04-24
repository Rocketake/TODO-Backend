import { todosCollection } from '../db/models/todo.js';

export const getAllTodos = async (filter) => {
  const todos = filter
    ? await todosCollection.find({ status: filter })
    : await todosCollection.find();
  return todos;
};

export const createTodo = async (payload) => {
  const todo = await todosCollection.create(payload);
  return todo;
};

export const deleteTodo = async (todoId) => {
  const todo = await todosCollection.findOneAndDelete({
    _id: todoId,
  });

  return todo;
};

export const updateTodo = async (todoId, payload, options = {}) => {
  const result = await todosCollection.findOneAndUpdate(
    { _id: todoId },
    payload,
    {
      new: true,
      ...options,
    },
  );

  return result;
};
