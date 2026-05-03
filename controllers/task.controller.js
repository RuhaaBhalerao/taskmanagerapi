const Task = require("../models/task.model.js");

// CACHE
let taskCache = {
  data: null,
  timestamp: null
};

const getTasks = async (req, res) => {
  if (taskCache.data && Date.now() - taskCache.timestamp < 60000) {
    return res.json(taskCache.data);
  }

  const tasks = await Task.find({ userId: req.user.id });

  taskCache = {
    data: tasks,
    timestamp: Date.now()
  };

  res.json(tasks);
};

const createTask = async (req, res) => {
  const task = await Task.create({ ...req.body, userId: req.user.id });

  // CLEAR CACHE
  taskCache = { data: null, timestamp: null };

  res.json(task);
};

const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  taskCache = { data: null, timestamp: null };

  res.json(task);
};

const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);

  taskCache = { data: null, timestamp: null };

  res.json({ message: "Deleted" });
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
