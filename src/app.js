const express=require('express');
const path=require('path');
const hbs =require('hbs');
require('./db/mongoose')
const UserData =require('./schema/mongooseSchema')


const app =express()

// set port number
const PORT =process.env.PORT || 8000;

// static website path define 
const staticPath =path.join(__dirname,"../public");

app.use(express.static(staticPath))
// console.log(staticPath);


// conponent path define
const componentpath =path.join(__dirname,"./component");
console.log(componentpath);


// set view engine hbs ,and change views folder name to components
app.set('view engine','hbs')
app.set('views',componentpath)

app.use(express.urlencoded({extended:false}))

// hbs file render using res.render method
app.get('/',(req,res)=>{
  res.render('index')
})


app.post('/',async(req,res)=>{

  try {
    // i use object destructing method
    const dataSave =UserData({ username,email,phone}=req.body)

    const Result =await dataSave.save()
    res.status(200).render('index')
    console.log(Result);
  } catch (error) {
    console.log(error);
  }
})


// server test using send methods
app.get('/about',(req,res)=>{
  res.send("about page")
})




// listen port and call back function
app.listen(PORT,()=>{
    console.log(`server at ${PORT}`);
})