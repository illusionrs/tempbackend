const express = require('express')
const app=express();
const cors=require('cors')
const mongoose=require('mongoose');


mongoose.connect('mongodb+srv://shanu:shanu@cluster0.q0rvl.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true}).then(()=>{console.log("connected")}).catch(err=>console.log(err));
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
const userroute=require('./routes/user')

app.use('/user',userroute);

app.get('/work',(req,res)=>{
    res.send('<h1>working</h1>')
})

const PORT=process.env.PORT || 8000;

app.listen(PORT,()=>console.log(`running on ${PORT}`));

// <<<<<<< HEAD
// // app.listen(PORT,()=>console.log(`running on ${PORT}`));
// // =======
// // app.listen(PORT,()=>console.log("running on ${PORT}"));
// >>>>>>> 688bd0fd857a7df5072aff9a2bf9184d1c252151
