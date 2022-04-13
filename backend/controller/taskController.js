
const Task = require('../models/taskModel')
const asyncHandler = require('express-async-handler')


// post a New Task in a particular List

const addNewTask = asyncHandler(async(req,res) => {
    const {title} = req.body;
 
    if(title && title.length === 0) {
        res.status(400);
        throw new Error("Title is Empty")
    } else {
        const task = new Task({
            title,
            
            _listId:req.params.listId
        })
 
        const createdTasks = await task.save();
        res.status(201).json(createdTasks)
    }
 })

 


// // Get all Task from a particular list 


// const getAllTask = asyncHandler(async(req,res) => {
//     const task = await Task.find({
//         _listId:req.params.listId
//     })

//     if(task) {
//         res.json(task)
//     } else {
//         res.status(404)
//         throw new Error("No Tasks Found")
//     }

   
// })



// get all tasks 
const getAllTask = asyncHandler(async(req,res)=>{
    const task = await Task.find({
        _listId:req.params.listId
    })

    if(task) {
        res.json(task)
    } else {
        res.status(404)
        throw new Error("No tasks Found")
    }
})





// update an existing task via List 


// Update a List 
const updateTask = asyncHandler(async(req,res)=> {
    const {title,description,name } = req.body;
    const task = await Task.findById(req.params.id);

    if(title) {
        
        task.title = title,
        _listId=req.params.listId

        const updatedTask = await task.save();
        res.status(201).json(updatedTask)
    }
})



// delete Tasks
const deleteTask = asyncHandler(async(req,res)=> {
    const task = await Task.findById(req.params.id)
    if(task){
        await task.remove();
        res.json({message:"Task Removed"})
      } else {
        res.status(404);
        throw new Error("Task Not Found")
      }
})

module.exports ={addNewTask,getAllTask,updateTask,deleteTask}