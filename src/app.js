const express=require('express');
const path=require('path');
const hbs =require('hbs');


const app =express()

// set port number
const PORT =process.env.PORT || 8000;

// static website path define 
const staticPath =path.join(__dirname,"../public");

// app.use(express.static(staticPath))
// console.log(staticPath);


// conponent path define
const componentpath =path.join(__dirname,"./component");
console.log(componentpath);


// set view engine hbs ,and change views folder name to components
app.set('view engine','hbs')
app.set('views',componentpath)


// hbs file render using res.render method
app.get('/',(req,res)=>{
  res.render('index')
})


// server test using send methods
app.get('/about',(req,res)=>{
  res.send("about page")
})




// listen port and call back function
app.listen(PORT,()=>{
    console.log(`server at ${PORT}`);
})