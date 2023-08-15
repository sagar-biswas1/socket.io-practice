const data= require('../data')
const findSingle = async(req,res,next) => {
    const {id}= req.params
 try{
    const singleChat= data.find((c)=>c._id===id)
  res.json(singleChat)
 }catch(e){
    next(e)
 }
}

module.exports=findSingle