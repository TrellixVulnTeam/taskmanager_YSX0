const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const generateToken = require('../util/generateToken')



//Post User 



// Register A new User

const registerNewUser = asyncHandler(async (req, res) => {
    const { name, email, password, cPassword } = req.body;
  
    const userExist = await User.findOne({ email });
  
    if (userExist) {
      res.status(400);
      throw new Error("User Already Exist");
    }
  
    const user = await User.create({
      name,
      email,
      password,
      cPassword,
    });
  
    if (user) {
      res.status(201).json({
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
       
      });
    } else {
      res.status(400);
      throw new Error("Invalid Data");
    }
  });
  

  


  // login user
const authuser = asyncHandler(async(req,res) => {

    const {email,password} = req.body

    const user = await User.findOne({email})

    if (user && (await user.matchPassword(password))) {
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
      
          
        });
      } else {
        res.status(401);
        throw new Error("Invalid Email & Password ");
      }
    });

module.exports = {
    authuser,
    registerNewUser
}