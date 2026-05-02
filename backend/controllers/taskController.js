const Task = require("../models/Task");

exports.createTask = async (req, res) => {

  try {

    const {
      title,
      description,
      dueDate,
      priority,
      assignedTo
    } = req.body;

    const task = await Task.create({

      title,

      description,

      dueDate,

      priority,

      assignedTo

    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: "Task creation failed"
    });
  }
};




exports.getTasks = async (req, res) => {

  try {

    const tasks = await Task.find()
      .populate("assignedTo");

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: "Cannot fetch tasks"
    });
  }
};



exports.updateTask = async (req, res) => {

  try {

    const task = await Task.findByIdAndUpdate(

      req.params.id,

      req.body,

      { new: true }

    );

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: "Task update failed"
    });
  }
};