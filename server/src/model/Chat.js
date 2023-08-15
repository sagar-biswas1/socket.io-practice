const mongoose =require('mongoose');
const { Schema,model } = mongoose;


const chatModel= new Schema({
    chatName:{
        type:String,
        trim:true
    },
    isGroupChat:{
        type:Boolean,
        default:false
    },
    users:[{
        type:mongoose.Schema.type.ObjectId,
        ref:"User"

    }],
    latestMessage:{
        type:mongoose.Schema.type.ObjectId,
        ref:'Message'
    },
    groupAdmin:{
        type:mongoose.Schema.type.ObjectId,
        ref:"User"
    }
},{
    timestamps:true
})


const Chat=model("Chat",chatModel)

module.exports = Chat