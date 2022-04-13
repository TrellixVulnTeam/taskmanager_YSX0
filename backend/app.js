const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userRoutes = require('./routes/userRoutes')
const listRoutes = require('./routes/listRoutes')
const taskRoutes = require('./routes/taskRoutes')



const port = 5000;
const app = express();



app.use(express.json())
app.use(cors())
app.use('/api/users',userRoutes)
app.use('/api/v1',listRoutes)
app.use('/api/v1',taskRoutes)


//imporitng config file for connection from conn 
dotenv.config({path: './config.env'});
require('./db/conn')


app.get('/',(req,res) => {
    res.send("your app is running")
})




app.listen(port,() => {
    console.log(`The App is running on port ${port}`);
})
