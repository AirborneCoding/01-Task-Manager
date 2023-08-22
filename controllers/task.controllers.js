const Task = require("../models/task.model")
const { StatusCodes } = require("http-status-codes")
const CustomError = require("../errors")
const moment = require("moment")
/**-----------------------------------------------
 * @desc    Create New task
 * @route   /api/v1/tasks
 * @method  POST
 * @access  public 
------------------------------------------------*/
const createTask = async (req, res) => {
 // console.log(req.body);
 const { title, description } = req.body;
 if (!title) {
  throw new CustomError.BadRequestError("Please provide a title")
 }

 // Check the number of existing tasks
 const taskCount = await Task.countDocuments();
 if (taskCount >= 20) {
  throw new CustomError.BadRequestError("20 Tasks as limit for testing has reached. Please Delete a task before creating a new one.")
 }

 let task = await Task.create(req.body);

 moment.locale('ar-ma');
 task = {
  ...task._doc,
  formattedCreateDate: moment(task.createdAt).format('LLLL'),
  formattedUpdateDate: moment(task.updatedAt).format('LLLL'),
 };


 res.status(StatusCodes.CREATED).json({ msg: "Task created ", task })
}

/**-----------------------------------------------
 * @desc    Get All Tasks
 * @route   /api/v1/tasks
 * @method  GET
 * @access  public 

------------------------------------------------*/

const getAllTasks = async (req, res) => {
 const tasks = await Task.find().sort("-createdAt")

 moment.locale('ar-ma');
 const formattedTasks = tasks.map(task => {
  const formattedTask = {
   ...task._doc, // Spread the task properties
   formattedCreateDate: moment(task.createdAt).format('LLLL'),
   formattedUpdateDate: moment(task.updatedAt).format('LLLL'),
  };
  return formattedTask;
 });

 res.status(StatusCodes.OK).json({ count: formattedTasks.length, tasks: formattedTasks });
}

/**-----------------------------------------------
 * @desc    Get Single Task
 * @route   /api/v1/tasks/:id
 * @method  GET
 * @access  public  
------------------------------------------------*/
const getSingletask = async (req, res) => {
 // console.log(req.params);
 const { id: taskId } = req.params

 const task = await Task.findOne({ _id: taskId })
 if (!task) {
  throw new CustomError.NotFoundError("Task not found")
 }

 // moment.locale('ar');
 const CreateDate = moment(task.createdAt).format('LLLL')
 const updateDate = moment(task.updatedAt).format('LLLL')

 res.status(StatusCodes.OK).json({ task, CreateDate, updateDate })
}

/**-----------------------------------------------
 * @desc    update Task
 * @route   /api/v1/tasks/:id
 * @method  Update
 * @access  public  
 * ! TODO : check it 
------------------------------------------------*/
const updateTask = async (req, res) => {
 const { id: taskId } = req.params

 let task = await Task.findOneAndUpdate(
  { _id: taskId },
  req.body,
  { new: true, runValidators: true }
 )

 if (!task) {
  throw new CustomError.NotFoundError("Task not found")
 }

 moment.locale('ar-ma');
 task = {
  ...task._doc,
  formattedCreateDate: moment(task.createdAt).format('LLLL'),
  formattedUpdateDate: moment(task.updatedAt).format('LLLL'),
 };

 res.status(StatusCodes.CREATED).json({ msg: "Task updated", task })
}


/**-----------------------------------------------
 * @desc    Delete Task
 * @route   /api/v1/tasks/:id
 * @method  DELETE
 * @access  public  
------------------------------------------------*/
const deleteTask = async (req, res) => {
 const { id: taskId } = req.params

 const task = await Task.findOne({ _id: taskId })
 if (!task) {
  throw new CustomError.NotFoundError("Task not found")
 }

 await task.deleteOne()

 res.status(StatusCodes.CREATED).json({ msg: "Task deleted" })
}

/**-----------------------------------------------
 * @desc    get tasks count
 * @route   /api/v1/tasks
 * @method  GET
 * @access  public 
------------------------------------------------*/
const countTasks = async (req, res) => {
 const tasks = await Task.count()
 res.status(StatusCodes.OK).json({ tasks })
}

module.exports = {
 createTask,
 updateTask,
 deleteTask,
 getAllTasks,
 getSingletask,
 countTasks
}