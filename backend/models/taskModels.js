const mongoose = require('mongoose');

// Define task schema
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  points: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  dueDate: { type: Date }
});

// Create and export the Task model
module.exports = mongoose.model('Task', taskSchema);
