const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    _id :mongoose.Schema.Types.ObjectId,
    userName : {type:String,required:true,unique:true},
    email : {type:String,required:true,unique:true},
    password : {type:String,required:true},
    phoneNumber : {type:Number,required:true},
    city: {type:String,required:true},
    instrument : {type:String,required:true},
    genre: {type:String,required:true},
    level : {type:String,required:true},
    
});
module.exports =mongoose.model('User',userSchema)