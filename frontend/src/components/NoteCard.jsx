import { PenSquare, Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import API from "../lib/axios";
import { formatDate } from "../lib/utils";

export default function NoteCard({ note, setNotes }) {
  const handleDelete = async (e, id) => {
    e.preventDefault(); // Prevent navigation

    if (!window.confirm("Bạn có chắc chắn muốn xóa ghi chú này?")) return;

    try {
      await API.delete(`/notes/${id}`);
      toast.success("Đã xóa ghi chú thành công");
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch (error) {
      console.log("Lỗi trong handleDelete", error);
      toast.error("Không thể xóa ghi chú");
    }
  };

  return (
    <Link
      className="bg-base-100 hover:shadow-lg border-[#00FF9D] border-base-300 border-t-4 border-solid transition-all duration-200 card"
      to={`/note/${note._id}`}
    >
      <div className="card-body">
        <h3 className="text-base-content card-title">{note.title}</h3>
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        <div className="justify-between items-center mt-4 card-actions">
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center gap-1">
            <PenSquare className="w-4 h-4" />
            <button
              className="text-error btn btn-ghost btn-xs"
              onClick={(e) => handleDelete(e, note._id)}
              type="button"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
