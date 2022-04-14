const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')


// user Registration 
const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        cPassword:{
            type:String,
            required:true
        },
    },
    {
        timestamps:true,
    }
)



// Bycrypting  
userSchema.pre('save',async function(next) {
    if(!this.isModified('password','cPassword')) {
        next()
    }


  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt)
  this.cPassword = await bcrypt.hash(this.cPassword,salt)
})



// Matching Password 

userSchema.methods.matchPassword = async function(enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
}


const User = mongoose.model("User",userSchema)

module.exports = User;