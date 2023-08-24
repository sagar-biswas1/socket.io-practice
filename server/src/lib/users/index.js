const User = require("../../model/User")

const findUsers =async({name="",email=""},id)=>{

    const filterQuery = (name || email)
    ? {
        $or: [
           { name: { $regex: name, $options: "i" } },
           { email: { $regex: email, $options: "i" } },
        ],
      }
    : {}

    
    const users= await User.find(filterQuery).find({_id:{$ne:id}}).select('-password')
    return users

}

module.exports={
    findUsers
}