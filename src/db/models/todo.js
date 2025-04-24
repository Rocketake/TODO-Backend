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
      type: Boolean,
      required: true,
      default: 'false',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const todosCollection = model('todo', todosSchema);
