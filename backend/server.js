import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/notes.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// CORS middleware - cho phép từ mọi nguồn
app.use(cors({ origin: "*" }));

// Middleware để parse JSON
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);

app.get("/", (_req, res) => {
  res.send("API đang chạy...");
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Máy chủ đang chạy tại http://localhost:${PORT}`);
  });
});
