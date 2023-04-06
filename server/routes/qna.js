const express=require("express");
const router=express.Router();
const auth=require("../middleware/auth");
const Users=require("../models/user");
const { Configuration, OpenAIApi }=require("openai");


router.get("/ping",auth,(req,res)=>{
    res.json({
        message:"jaya is love!!"
    })
})

router.post("/chat",auth,async(req,res)=>{
    const question=req.body.question;
    
    const OPENAI_API_KEY="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"
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 1000,
      temperature: 0,
    });
    let answer=response?.data?.choices[0]?.text.split("\n").filter((val)=>val);
    answer=answer.map((value)=>value.trim());

    const userD=await Users.findById({_id:req.user._id});
    userD.qna.push({from:"you",value:question});
    userD.qna.push({from:"ai",value:answer});
    await userD.save();
    res.json({
        answer:answer,
        question,
    })
})

router.get("/userData",auth,(req,res)=>{
  const arr=req.user.qna;
  const name=req.user.name.split(" ");
  arr.push({from:"ai",value:`Hi ${name[0]}, nice to meet you.`});
  arr.push({from:"ai",value:`Type your question and press enter!!`});

  const obj={
    qnaArray:arr
  }
  res.send(obj);
})
module.exports=router;

