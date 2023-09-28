const express= require('express');
const todoHome= require('../Controller/TodoController')
const router=express.Router();
router.get('/todoHome',todoHome.home)
router.post('/saveData',todoHome.addTodo);
router.get('/delete/*',todoHome.deleteTodo);
router.get('/edit/*',todoHome.editPage)
router.post('/EditDataAPI/*',todoHome.NowUpdate)
router.get('/halo',todoHome.hallo)
   
console.log("router loaded");

module.exports=router;