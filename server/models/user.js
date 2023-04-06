const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    qna:{type:Array}
})
userSchema.methods.getPkj=function(){
    return jwt.sign({_id:this._id},"my password hai tu");
}

const Users=mongoose.model("users",userSchema);

async function createUser(){
    const user=new Users({
        name:"Piyush K Jha",
        email:"admin@chief.com",
        password:"Ayush@123",
        qna:[{from:"ai",value:"Hi user, nice to meet you."},{from:"ai",value:"Type question and press enter!!"}]
    })
    const result=await user.save();
    console.log(result);
}
// createUser();

module.exports=Users;