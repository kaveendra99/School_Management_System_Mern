const express = require("express");
const { getStudents, addStudent } = require("../controllers/studentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, getStudents);
router.post("/", authMiddleware, addStudent);

module.exports = router;
