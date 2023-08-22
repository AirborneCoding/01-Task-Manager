## Model
[] title : String
[] decription : String
[] completed : boolean
[] date : date


## controllers
[] create task
[] update task
[] delete task
[] get all tasks
[] get single task

## routes
[] router.route("/")
 .post(createTask)
 .get(getAllTasks)

[] router.route("/:id")
 .get(getSingletask)
 .patch(updateTask)
 .delete(deleteTask)
--------------------------------------------------------------