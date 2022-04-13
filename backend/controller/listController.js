const asyncHandler = require('express-async-handler')
const List = require('../models/listModel')

// Add a List 
const addList = asyncHandler(async (req, res) => {
    const {
      title
    } = req.body;
  
    if (title && title.length === 0) {
      res.status(400);
      throw new Error("Please Enter Title");
    } else {
      const list = new List({
         title
      });
  
      const createdList = await list.save();
  
      res.status(201).json(createdList);
    }
  });

  // get a list



const getList = asyncHandler(async (req, res) => {
  const list = await List.find({});
  res.json(list);
});

// Update a List 
const updateList = asyncHandler(async(req,res)=> {
    const {title } = req.body;
    const list = await List.findById(req.params.id);

    if(title) {
        list.title = title

        const updatedList = await list.save();
        res.status(201).json(updatedList)
    }
})


//Delete a List 
const deleteList = asyncHandler(async(req,res) => {
  const list = await List.findById(req.params.id)

  if(list){
    await list.remove();
    res.json({message:"List Removed"})
  } else {
    res.status(404);
    throw new Error("List Not Found")
  }
})





module.exports = {addList,updateList,deleteList,getList}
  