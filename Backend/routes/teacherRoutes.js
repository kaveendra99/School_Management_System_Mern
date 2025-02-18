const express = require("express");
const { getTeachers, addTeacher } = require("../controllers/teacherController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getTeachers);
router.post("/", authMiddleware, addTeacher);

module.exports = router;
