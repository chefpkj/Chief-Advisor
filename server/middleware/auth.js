const Users=require("../models/user");
const jwt=require("jsonwebtoken");

const auth=async (req,res,next)=>{
    const token=req.header("x-auth-token");
    if(!token){
        return res.status(400).send("Access Denied!!, No jwt token provided");
    }

    // try{
    //  const decoded_payload=jwt.varify(token,"your-256-bit-secret");
    //  req.user=decoded_payload;
    //  next();
    // }
    // catch(err){
    //     return res.status(400).send("Invalid jwt token");
    // }

    // const user= await Users.findById({_id:token});

    const user=await Users.findById({_id:token});
    if(!user){
        return res.status(400).send("Invalid jwt token");
    }
    else{
        req.user=user;
        next();
    }
}

module.exports=auth;