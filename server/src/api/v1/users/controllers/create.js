const asyncHandler = require('express-async-handler')
const { createUser } = require("../../../../lib/users");
const registerUser = asyncHandler(async (req, res, next) => {
  const { name, email, password, pic } = req.body;

  if (!name || !email || !password) {
    throw new Error("Please enter data for the required fields");
  }

  try {
    const user = await createUser({ name, email, password, pic });
    if(user){
        res.status(201).json({data:user})
    }else{
        throw new Error("failed to create user");
    }
  } catch (e) {
    next(e);
  }
});
module.exports = registerUser;
