const data= require('../data')
const findAll = async(req,res,next) => {
 try{
  res.json(data)
 }catch(e){
    next(e)
 }
}

module.exports=findAll