const Student = require("../models/Student");

exports.getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addStudent = async (req, res) => {
    const { name, age, grade } = req.body;
    try {
        const student = new Student({ name, age, grade });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
