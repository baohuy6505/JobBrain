const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

// Import kết nối DB (Đảm bảo file này tồn tại)
const connectDB = require("./src/config/db");
const routes = require("./src/routes/index");
const app = express();
const PORT = process.env.PORT || 5000;

// --- 1. Middleware ---
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", routes);
app.get("/", (req, res) => {
  res.json("Welcome to JobBrain API");
});
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true
}));
// --- 4. Khởi chạy Server ---
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`=================================`);
      console.log(
        `Server Backend (index.js) đang chạy tại: http://localhost:${PORT}`,
      );
      console.log(`=================================`);
    });
  } catch (error) {
    console.error("Lỗi khởi động:", error.message);
    process.exit(1);
  }
};

startServer();
