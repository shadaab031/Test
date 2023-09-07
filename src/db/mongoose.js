const mongoose =require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Sample').then(()=>{
    console.log('connection success full mongoose');
}).catch((error)=>{
    console.log(`mongoose connection error ${error}`);
})