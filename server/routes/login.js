const express=require("express");
const router=express.Router();
const Users=require("../models/user");
const joi=require("joi");


router.get("/",(req,res)=>{
    return res.send("welcome to login page");
})

router.post("/",async(req,res)=>{
    const {error}=isValid(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    const user=await Users.findOne({email:req.body?.email});
    if(!user){
        return res.status(400).send("Invalid email");
    }
    if(req.body.password!=user.password){
        return res.status(400).send("Invalid passwprd");
    }
    // const token=user.getPkj();
    // return res.header("x-auth-token",token).send({"token":"Success"});

    return res.send({"token":user._id});

})

function isValid(req_body){
    const schema={
        email:joi.string().email().required(),
        password:joi.string().required(),
    }
    return joi.validate(req_body,schema);
}



module.exports=router;