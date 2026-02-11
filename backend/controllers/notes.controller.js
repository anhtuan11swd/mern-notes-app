import Note from "../models/Note.js";

// Lấy tất cả ghi chú
export const getAllNotes = async (_req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1: mới nhất trước
    res.status(200).json(notes);
  } catch (error) {
    console.error("Lỗi trong getAllNotes:", error);
    res.status(500).json({ message: "Lỗi máy chủ nội bộ" });
  }
};

// Tạo ghi chú mới
export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Tiêu đề và nội dung là bắt buộc" });
    }

    const newNote = new Note({ content, title });
    const savedNote = await newNote.save();

    res.status(201).json(savedNote); // 201: Created
  } catch (error) {
    console.error("Lỗi trong createNote:", error);
    res.status(500).json({ message: "Lỗi máy chủ nội bộ" });
  }
};

// Lấy chi tiết 1 ghi chú
export const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const note = await Note.findById(id);

    if (!note) {
      return res.status(404).json({ message: "Không tìm thấy ghi chú" });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error("Lỗi trong getNoteById:", error);
    res.status(500).json({ message: "Lỗi máy chủ nội bộ" });
  }
};

// Cập nhật ghi chú
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Tiêu đề và nội dung là bắt buộc" });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { content, title },
      { returnDocument: "after" }, // Trả về document sau khi update
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Không tìm thấy ghi chú" });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Lỗi trong updateNote:", error);
    res.status(500).json({ message: "Lỗi máy chủ nội bộ" });
  }
};

// Xóa ghi chú
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: "Không tìm thấy ghi chú" });
    }

    res.status(200).json({ message: "Ghi chú đã được xóa thành công" });
  } catch (error) {
    console.error("Lỗi trong deleteNote:", error);
    res.status(500).json({ message: "Lỗi máy chủ nội bộ" });
  }
};
