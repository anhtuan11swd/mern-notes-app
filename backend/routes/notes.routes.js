import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
  updateNote,
} from "../controllers/notes.controller.js";

const router = express.Router();

// Lấy tất cả ghi chú
router.get("/", getAllNotes);

// Tạo ghi chú mới
router.post("/", createNote);

// Lấy chi tiết 1 ghi chú
router.get("/:id", getNoteById);

// Cập nhật ghi chú
router.put("/:id", updateNote);

// Xóa ghi chú
router.delete("/:id", deleteNote);

export default router;
