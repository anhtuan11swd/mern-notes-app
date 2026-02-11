import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";

const NoteDetailPage = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.log("Lỗi tải ghi chú", error);
        toast.error("Không thể tải ghi chú");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa ghi chú này?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Đã xóa ghi chú");
      navigate("/");
    } catch (error) {
      console.log("Lỗi xóa ghi chú:", error);
      toast.error("Không thể xóa ghi chú");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Vui lòng thêm tiêu đề hoặc nội dung");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Đã cập nhật ghi chú thành công");
      navigate("/");
    } catch (error) {
      console.log("Lỗi lưu ghi chú:", error);
      toast.error("Không thể cập nhật ghi chú");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <LoaderIcon className="animate-spin w-10 h-10 text-gray-400" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
            to="/"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            Quay lại ghi chú
          </Link>
          <button
            className="inline-flex items-center gap-2 px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
            onClick={handleDelete}
            type="button"
          >
            <Trash2Icon className="w-5 h-5" />
            Xóa ghi chú
          </button>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-8">
            <div className="mb-6">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="title"
              >
                Tiêu đề
              </label>
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                id="title"
                onChange={(e) => setNote({ ...note, title: e.target.value })}
                placeholder="Tiêu đề ghi chú"
                type="text"
                value={note.title}
              />
            </div>

            <div className="mb-8">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="content"
              >
                Nội dung
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[120px]"
                id="content"
                onChange={(e) => setNote({ ...note, content: e.target.value })}
                placeholder="Viết ghi chú của bạn ở đây..."
                value={note.content}
              />
            </div>

            <div className="flex justify-end">
              <button
                className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={saving}
                onClick={handleSave}
                type="button"
              >
                {saving ? "Đang lưu..." : "Lưu thay đổi"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NoteDetailPage;
