import { model, Schema } from 'mongoose';

('in progress');
const todosSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      default: 'false',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const todosCollection = model('todo', todosSchema);
