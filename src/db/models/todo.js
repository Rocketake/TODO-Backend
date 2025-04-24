import { model, Schema } from 'mongoose';

('in progress');
const todosSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      enum: ['todo', 'in progress', 'done'],
      required: true,
      default: 'todo',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const todosCollection = model('todo', todosSchema);
