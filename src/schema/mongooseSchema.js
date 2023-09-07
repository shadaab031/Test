const mongoose =require('mongoose');

 const UserSchema=mongoose.Schema(
    {
      username:{ 
        
        type:String,
        required:true
              
       
       },
       email:{
        type:String,
        required:true
       
       },
       phone:{
        type:Number,
        required:true
       }
    
    }
 )

 const UserData=mongoose.model('userlist',UserSchema)


module.exports=UserData;