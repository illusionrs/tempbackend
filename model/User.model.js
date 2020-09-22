const mongoose = require('mongoose')


const userschema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true,
        unique:false
    },

    email:{

        type:String,
        required:true,
        unique:false
    },

    password:{
        type:String,
        required:true,
        unique:false
    }
})
module.exports=mongoose.model("User",userschema)