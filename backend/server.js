import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.get("/", (_req, res) => {
  res.send("API đang chạy...");
});

app.get("/api/notes", (_req, res) => {
  res.status(200).send("Bạn có 5 ghi chú");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
  });
});
