# Notes API - Postman Test Guide

## Base URL
```
http://localhost:5001/api/notes
```

## 1. Lấy tất cả ghi chú
**Method:** `GET`  
**URL:** `/api/notes`

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Tiêu đề ghi chú",
    "content": "Nội dung ghi chú",
    "createdAt": "2024-01-01T10:00:00.000Z",
    "updatedAt": "2024-01-01T10:00:00.000Z"
  }
]
```

---

## 2. Tạo ghi chú mới
**Method:** `POST`  
**URL:** `/api/notes`  
**Headers:** `Content-Type: application/json`

**Request Body:**
```json
{
  "title": "Tiêu đề ghi chú mới",
  "content": "Nội dung ghi chú mới"
}
```

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Tiêu đề ghi chú mới",
  "content": "Nội dung ghi chú mới",
  "createdAt": "2024-01-01T10:00:00.000Z",
  "updatedAt": "2024-01-01T10:00:00.000Z"
}
```

**Error (400):**
```json
{
  "message": "Tiêu đề và nội dung là bắt buộc"
}
```

---

## 3. Lấy chi tiết ghi chú
**Method:** `GET`  
**URL:** `/api/notes/{id}`

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Tiêu đề ghi chú",
  "content": "Nội dung ghi chú",
  "createdAt": "2024-01-01T10:00:00.000Z",
  "updatedAt": "2024-01-01T10:00:00.000Z"
}
```

**Error (404):**
```json
{
  "message": "Không tìm thấy ghi chú"
}
```

---

## 4. Cập nhật ghi chú
**Method:** `PUT`  
**URL:** `/api/notes/{id}`  
**Headers:** `Content-Type: application/json`

**Request Body:**
```json
{
  "title": "Tiêu đề đã cập nhật",
  "content": "Nội dung đã cập nhật"
}
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Tiêu đề đã cập nhật",
  "content": "Nội dung đã cập nhật",
  "createdAt": "2024-01-01T10:00:00.000Z",
  "updatedAt": "2024-01-01T11:00:00.000Z"
}
```

---

## 5. Xóa ghi chú
**Method:** `DELETE`  
**URL:** `/api/notes/{id}`

**Response (200):**
```json
{
  "message": "Ghi chú đã được xóa thành công"
}
```

**Error (404):**
```json
{
  "message": "Không tìm thấy ghi chú"
}
```

---

## Postman Collection Setup

### Environment Variables:
```
base_url = http://localhost:5001
note_id = {{your_note_id}}
```

### Test Scripts (Add to Tests tab):

**For successful responses (200/201):**
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has success data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData).to.be.an('object');
});
```

**For create/update operations:**
```javascript
if (pm.response.code === 201 || pm.response.code === 200) {
    var jsonData = pm.response.json();
    pm.environment.set("note_id", jsonData._id);
}
```

## Error Codes
- `200` - Thành công
- `201` - Tạo thành công
- `400` - Dữ liệu đầu vào không hợp lệ
- `404` - Không tìm thấy ghi chú
- `500` - Lỗi máy chủ nội bộ