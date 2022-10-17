const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


const Login=require('./models/Login')
const app = express()
//db connections
 mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Login')
mongoose.connection.on('connected',()=>{
    console.log('Database is connected');
})
mongoose.connection.on('error',()=>{
    console.log('error occured');
})
//middlewares
app.use(cors())
app.use(express.json())

//routes
app.get('/',(req,res)=>{
    console.log('get request')
    res.send('get request')
})
app.post('/login',async(req,res)=>{
    console.log(req.body.firstname)
    console.log(req.body.lastname)
    console.log(req.body.password)
    const login = await  new  Login({
        _id : new mongoose.Types.ObjectId,
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        place: req.body.place
    });
    login.save()

    
    .then(result=>{
        console.log(result);
        res.status(200).json({msg:"succesfully submitted"});
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({msg:"Error occured"});
    })
})

//server
app.listen(5000,()=>{
    console.log('server was connected on port:5000')
})