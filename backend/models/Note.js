import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    content: {
      required: true,
      type: String,
    },
    title: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true, // Tự động thêm createdAt, updatedAt
  },
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
