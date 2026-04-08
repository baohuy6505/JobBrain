const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

// Routes cơ bản
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);

// === VÍ DỤ CÁCH SỬ DỤNG MIDDLEWARE KIỂM TRA ROLE TƯƠNG LAI ===

// Chỉ cho phép Employer (Nhà tuyển dụng) đăng bài job mới
router.post("/job-post", AuthMiddleware.verifyRole(["employer", "admin"]), (req, res) => {
    res.json({ message: "Welcome Nhà tuyển dụng!" });
});

// Chỉ Admin mới xem được bảng điều khiển tổng
router.get("/admin/dashboard", AuthMiddleware.verifyRole(["admin"]), (req, res) => {
    res.json({ message: "Welcome Admin!" });
});

module.exports = router;