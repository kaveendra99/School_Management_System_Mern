const Teacher = require("../models/Teacher");

exports.getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.addTeacher = async (req, res) => {
    const { name, subject } = req.body;
    try {
        const teacher = new Teacher({ name, subject });
        await teacher.save();
        res.status(201).json(teacher);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
