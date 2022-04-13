const express = require('express')
const router = express.Router()
const {authuser, registerNewUser} = require('../controller/userController')



// To post a new user 

router.route('/register').post(registerNewUser)

// to login

router.post('/login',authuser)


module.exports = router