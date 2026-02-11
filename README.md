# MERN Notes App

Ứng dụng ghi chú full-stack được xây dựng với MERN stack (MongoDB, Express, React, Node.js).

## Tính năng

- Tạo, đọc, cập nhật và xóa ghi chú
- Giao diện responsive với Tailwind CSS và DaisyUI
- RESTful API với Express.js
- Cơ sở dữ liệu MongoDB với Mongoose ODM
- Thông báo real-time với React Hot Toast

## Công nghệ sử dụng

### Frontend
- React 19
- React Router DOM 7
- Tailwind CSS 4
- DaisyUI 5
- Axios
- Lucide React (biểu tượng)
- React Hot Toast
- Vite 7

### Backend
- Node.js
- Express.js 5
- MongoDB với Mongoose 9
- CORS
- dotenv

### Công cụ phát triển
- Biome (linting & formatting)
- ESLint
- Nodemon

## Cấu trúc dự án

```
mern-notes-app/
├── backend/
│   ├── config/
│   │   └── db.js          # Kết nối cơ sở dữ liệu
│   ├── controllers/
│   │   └── notes.controller.js  # Các thao tác CRUD
│   ├── models/
│   │   └── Note.js        # Schema Mongoose
│   ├── routes/
│   │   └── notes.routes.js # Các route API
│   ├── .env               # Biến môi trường
│   ├── .env.example       # Mẫu biến môi trường
│   └── server.js          # Điểm khởi đầu
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── NoteCard.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   ├── CreatePage.jsx
│   │   │   └── NoteDetailPage.jsx
│   │   ├── lib/
│   │   │   ├── axios.js
│   │   │   └── utils.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── index.html
└── README.md
```

## Các endpoint API

| Phương thức | Endpoint | Mô tả |
|-------------|----------|-------|
| GET | `/api/notes` | Lấy tất cả ghi chú |
| POST | `/api/notes` | Tạo ghi chú mới |
| GET | `/api/notes/:id` | Lấy một ghi chú |
| PUT | `/api/notes/:id` | Cập nhật ghi chú |
| DELETE | `/api/notes/:id` | Xóa ghi chú |

## Bắt đầu sử dụng

### Yêu cầu
- Node.js (v18+)
- Tài khoản MongoDB Atlas hoặc MongoDB local

### Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd mern-notes-app
```

2. Cài đặt dependencies cho backend:
```bash
cd backend
npm install
```

3. Cài đặt dependencies cho frontend:
```bash
cd ../frontend
npm install
```

4. Thiết lập biến môi trường:
```bash
cd ../backend
cp .env.example .env
```
Chỉnh sửa `.env` và thêm chuỗi kết nối MongoDB:
```
PORT=5001
MONGO_URI=mongodb+srv://your_connection_string_here
```

### Chạy ứng dụng

1. Khởi động server backend:
```bash
cd backend
npm run dev
```

2. Khởi động server phát triển frontend:
```bash
cd frontend
npm run dev
```

3. Mở trình duyệt và truy cập `http://localhost:5173`

## Các lệnh có sẵn

### Backend
- `npm start` - Khởi động server production
- `npm run dev` - Khởi động server phát triển với nodemon
- `npm run lint` - Chạy Biome linter
- `npm run format` - Format code với Biome

### Frontend
- `npm run dev` - Khởi động server phát triển Vite
- `npm run build` - Build cho production
- `npm run preview` - Xem trước bản build production
- `npm run lint` - Chạy ESLint
- `npm run format` - Format code với Biome

## Giấy phép

ISC
