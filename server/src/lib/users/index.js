const User = require("../../model/User");

const createUser = async({name,email,password,pic})=>{
    if (!name || !email || !password) {
        throw new Error("Please enter data for the required fields");
      }

      const userExist= await User.findOnd({email})
      if(userExist) {
        res.status(400)
        throw new Error("user already exists")
      }

      const user = new User({name,email,password,pic})

      await user.save()
      delete user.password
      return user._doc
}

module.exports = {
    createUser
}