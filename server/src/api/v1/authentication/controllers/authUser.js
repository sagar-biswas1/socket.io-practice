const asyncHandler = require('express-async-handler');
const { getUser } = require('../../../../lib/authentication');


const authUser= asyncHandler(async(req, res)=>{
 const {email,password}=req.body
 if ( !email || !password) {
    throw new Error("Please enter data for the required fields");
  }
  const user = await getUser({ email, password });
  res.status(200).json({data: user})
})

module.exports = authUser