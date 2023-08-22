const express= require('express');
const applyMiddleware = require('./middleware');
require('dotenv').config();
const routes = require("./routes");
const app =express()
applyMiddleware(app)
app.use(routes);

app.get('/health',(req,res)=>{
    return res.json({msg:"hello user"})
})

app.use((err, _req, res, _next) => {
    // format error
    console.log(err.message.bgYellow)
    res.status(err.status || 500).json({
      message: err.message,
      errors: err.errors,
    });
  })

  module.exports=app