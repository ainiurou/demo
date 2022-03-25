const express = require('express');
const router = express.Router();
const todolist = require('./data/todo');

/**
 * 菜单数据
 */

router.get('/todolist',(req,res)=>{
  console.log(22)
  res.send({
    status:200,
    result:todolist
  })
})

module.exports = router