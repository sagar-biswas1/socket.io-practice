const User = require("../../model/User");
const generateToken = require("../../utils/generateToken");

const createUser = async({name,email,password,pic})=>{
    if (!name || !email || !password) {
        throw new Error("Please enter data for the required fields");
      }

      const userExist= await User.findOne({email})

      if(userExist) {
        throw new Error("user already exists")
      }

      const user = new User({name,email,password,pic})

      await user.save()
      const token= generateToken(user._id)
      const data= {...user._doc,token}
      delete data.password
      return data
}

module.exports = {
    createUser
}