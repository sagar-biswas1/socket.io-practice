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
      console.log(data.password)
      delete data.password
      return data
}

const getUser = async function({email,password}){
    if ( !email || !password) {
        throw new Error("Please enter data for the required fields");
      }
    const userExist= await User.findOne({email})

    if(!userExist) {
      throw new Error("no user exists")
    }

if(userExist && await userExist.matchPassword(password)){
    const token= generateToken(userExist._id)
    const data= {...userExist._doc,token}
  
    delete data.password
    return data
}else{
    throw new Error("invalid email or password")
}

}
module.exports = {
    createUser,getUser
}