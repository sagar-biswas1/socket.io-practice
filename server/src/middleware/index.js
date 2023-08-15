const express= require("express")

const applyMiddleware=(app)=>{
    app.use(express.json());
}

module.exports = applyMiddleware