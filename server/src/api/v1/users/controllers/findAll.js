const asyncHandler = require("express-async-handler");
const userHelper = require('../../../../lib/users')
const findUsers = asyncHandler(async (req, res,next) => {
  try{
    
   const users=await userHelper.findUsers({...req.query}, req?.user?._id )

   res.json(users)
  }catch(err){next(err);}
});

module.exports = findUsers;
