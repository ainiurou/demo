const express  = require('express');
const app = express();
const router = require('./router')
const cors = require('cors')

app.use(cors())
app.use('/api',router)
app.listen(8866,()=>{
  console.log('express服务运行在8866端口')
})