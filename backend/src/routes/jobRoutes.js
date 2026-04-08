const express = require("express");
const router = express.Router();

// Ví dụ một route lấy danh sách job
router.get("/all", (req, res) => {
    res.json({ message: "Danh sách tất cả việc làm" });
});

module.exports = router;