const router = require("express").Router()

const {
 createTask,
 updateTask,
 deleteTask,
 getAllTasks,
 getSingletask,
 countTasks
} = require("../controllers/task.controllers")

router.route("/")
 .post(createTask)
 .get(getAllTasks)

router.get("/count", countTasks)

router.route("/:id")
 .get(getSingletask)
 .patch(updateTask)
 .delete(deleteTask)


module.exports = router