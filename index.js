const express= require('express');
const path= require('path');
const ejs= require('ejs');
const router= require('./Router/Router');
const db= require('./Db/Config');
const TodoSchema = require('./model/TodoSchema')

const PORT= process.env.PORT || 8000;
const app=express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/',router)
app.set('view engine','ejs');
app.set('views','./views');


app.use(express.static('assests'));

app.listen(PORT,(err)=>{
    if(err){
        console.log("There is Problem with Starting the Server:----");
        return;
    }
    console.log("Server Started Successfully at port",PORT)
})