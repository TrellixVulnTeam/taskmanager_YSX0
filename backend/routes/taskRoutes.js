const express = require('express')
const router = express.Router()
const {addNewTask,getAllTask,updateTask,deleteTask} = require('../controller/taskController')


// add a new tasks via list Id

router.route('/list/:listId/task').post(addNewTask)



// get all tasks via list id

router.route('/list/:listId/task').get(getAllTask)


// Update Particular Tasks


router.route('/list/:listId/task/:taskId').put(updateTask).delete(deleteTask)


module.exports = router;