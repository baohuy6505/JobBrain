const express = require("express");
const router = express.Router();

// Import các route con
const jobRoutes = require("./jobRoutes");
const authRoutes = require("./authRoutes");


router.use("/jobs", jobRoutes);
router.use("/auth", authRoutes);

module.exports = router;