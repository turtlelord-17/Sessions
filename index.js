const express=require('express');
const port=3001;
const app=express();
const morgan=require('morgan');
const parser=require('body-parser');

const mongoose=require("mongoose");

const guitar=require('./routes/guitar');
const drum=require('./routes/drum');
const keyboard=require('./routes/keyboard');
const vocals=require('./routes/vocals');
const bass=require('./routes/bass');
app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));


app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();
});

app.get('/',function(req,res){
    
    res.send('hello world').status(200);
});
mongoose.connect("mongodb+srv://moiz66:moiz66@mycluster-jbqhd.mongodb.net/test?retryWrites=true",function(err){
    if(err){
        console.log('err');
    
      }
      else{
        console.log("Atlas conected");
      }
    
    });




app.use('/guitar',guitar);
app.use('/drum',drum);
app.use('/keyboard',keyboard);
app.use('/vocals',vocals);
app.use('/bass',bass);



app.listen(port,function(){
    console.log(`server listenin on ${port}`);})