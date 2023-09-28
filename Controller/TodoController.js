const express = require('express');
const TodoSchema= require('../model/TodoSchema');
const url = require('url')
var tempData1=true;
var BigData;
// const todo=[
//     {
//         desc:"this shubham",
//         date:"02/03/2023",
//         catogery:"school"
//     },
//     {
//         desc:"this Abhijeet",
//         date:"12/03/2023",
//         catogery:"work"
//     },
//     {
//         desc:"this Khushi",
//         date:"23/03/2023",
//         catogery:"Professional"
//     },
//     {
//         desc:"this Dinanath",
//         date:"4/03/2023",
//         catogery:"school"
//     }
// ]

// for the get data
module.exports.home = function(req, res) {
    TodoSchema.find().then(result => {
        var bool = true;
        console.log(result.length)
        if (result.length === 0) {
            console.log("inside if");
            bool = false;
        }
        tempData1=false;
        return res.render('index', {
            title: "TODO APP",
            todoList: result,
            bool: bool,
            tempData:tempData1
        });
    }).catch(err => {
        console.log("There is a problem with the get request ", err);
        return;
    });
}




// post add todo in db
module.exports.addTodo=function(req,res){
    const todo={
        desc:req.body.desc,
        date:req.body.date,
        catogery:req.body.catogery,
        time:req.body.time
    };
    TodoSchema.create(todo).then(result=>{
        console.log("your Todo added");
        res.redirect('back')
    }).catch(err=>{
        console.log("there is problem with Add Todo ",err);
        return
    })
   
}
 

module.exports.deleteTodo=function(req,res){
    var arr=req.query.id;
    var dataArray = arr.split(",");
    for(let i=0;i<dataArray.length;i++){
        var id=dataArray[i];
        TodoSchema.findByIdAndDelete(id).then(result=>{
        }).catch(err=>{
            console.log("There is problem with deleted if data ",i);
            return;
        })
    }
    res.redirect('back')
}

module.exports.editPage = function(req, res) {
    var id=req.query.id;
    TodoSchema.find().then(result => {
        var bool = true;
        console.log(result.length)
        if (result.length === 0) {
            console.log("inside if");
            bool = false;
        }
        tempData1=true;
        
        TodoSchema.findById(id).then(valueFound=>{
            return res.render('index', {
                title: "Update Todo APP",
                todoList: result,
                bool: bool,
                tempData:tempData1,
                single:valueFound
            });
       }).catch(err=>{
           console.log("error",err);
           return;
       })
    }).catch(err => {
        console.log("There is a problem with the get request ", err);
        return;
    });
}

    function fetchData(id){
    
    
}

module.exports.NowUpdate=(req,res)=>{
    
    var id= req.query.id;
    console.log("inside NowUpdate")
    const user={
        desc:req.body.desc,
        date:req.body.date,
        catogery:req.body.catogery
    };
    TodoSchema.findOneAndUpdate(user.id,user).then(result=>{
        console.log("Data Updated",result);
        res.redirect('back');
    }).catch(err=>{
        console.log(err," with update")
        return
    })
   
}

module.exports.clearData=(req,res)=>{
    TodoSchema.deleteMany({}).then(temo=>{
        return res.redirect('/todoHome')
    }).catch(err=>{
            console.log(err," with delete All")
            return
        })
}

module.exports.hallo=(req,res)=>{
    return res.send("hallo LOVE")
}