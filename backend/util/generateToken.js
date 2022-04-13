const jwt = require('jsonwebtoken')
const JWT_SECRET="aman"


// JWT Token Validation
const generateToken = (id) => {
    return jwt.sign({id},JWT_SECRET, {
        expiresIn:'300d'

    })

}


module.exports = generateToken;