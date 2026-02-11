import { ArrowLeftIcon } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import api from "../lib/axios";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("Tất cả các trường đều bắt buộc");
      return;
    }

    setLoading(true);
    try {
      await api.post("/notes", {
        content,
        title,
      });

      toast.success("Đã tạo ghi chú thành công!");
      navigate("/");
    } catch (error) {
      console.log("Lỗi tạo ghi chú", error);
      if (error.response.status === 429) {
        toast.error("Chậm lại! Bạn đang tạo ghi chú quá nhanh", {
          duration: 4000,
          icon: "💀",
        });
      } else {
        toast.error("Không thể tạo ghi chú");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Link
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          to={"/"}
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Quay lại ghi chú
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Tạo ghi chú mới
            </h2>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="title"
                >
                  Tiêu đề
                </label>
                <input
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  id="title"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Tiêu đề ghi chú"
                  type="text"
                  value={title}
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 mb-2"
                  htmlFor="content"
                >
                  Nội dung
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-[120px]"
                  id="content"
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Viết ghi chú của bạn ở đây..."
                  value={content}
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? "Đang tạo..." : "Tạo ghi chú"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreatePage;
