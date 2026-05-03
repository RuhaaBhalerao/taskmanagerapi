const express = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask
} = require("../controllers/task.controller.js");
const { protect } = require("../middleware/auth.middleware.js");

const router = express.Router();

router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.put("/:id", protect, updateTask);
router.delete("/:id", protect, deleteTask);

module.exports = router;
