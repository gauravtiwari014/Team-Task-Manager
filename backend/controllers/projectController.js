const Project = require("../models/Project");



exports.createProject = async (req, res) => {

  try {

    const { title, description, members } = req.body;

    const project = await Project.create({

      title,

      description,

      members

    });

    res.status(201).json(project);

  } catch (error) {

    res.status(500).json({
      message: "Project creation failed"
    });
  }
};


exports.getProjects = async (req, res) => {

  try {

    const projects = await Project.find()
      .populate("members");

    res.json(projects);

  } catch (error) {

    res.status(500).json({
      message: "Cannot fetch projects"
    });
  }
};