const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
 title: {
  type: String,
  required: [true, "Please provide task title"],
  trim: true,
  maxlength: [50, "titles must be smaller than 50 characters"]
 },
 description: {
  type: String,
  trim: true,
 },
 completed: {
  type: Boolean,
  default: false,
 }
},
 { timestamps: true }
)


module.exports = mongoose.model("Task", TaskSchema)