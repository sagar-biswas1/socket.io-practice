const data= require('../data')
const findAll = async(req,res,next) => {
   console.log('findAll',req.user)
 try{
  res.json(data)
 }catch(e){
    next(e)
 }
}

module.exports=findAll