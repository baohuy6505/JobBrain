const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Cấu hình Middleware
app.use(cors());
app.use(express.json());

// Dữ liệu mẫu gửi về cho Frontend
const jobs = [
  { id: 1, title: "Kỹ sư AI/ML", company: "JobBrain Corp", salary: "30-50tr" },
  { id: 2, title: "Frontend Developer", company: "Tech Hub", salary: "20-35tr" },
  { id: 3, title: "Data Scientist", company: "Big Data Co", salary: "40-60tr" }
];

// API Lấy danh sách việc làm
app.get('/', (req, res) => {
  res.json(jobs);
});

// Chạy server
app.listen(PORT, () => {
  console.log(`Server Backend đang chạy tại http://localhost:${PORT}`);
});