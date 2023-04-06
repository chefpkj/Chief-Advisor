const express = require("express");
const app=express();
const cors=require("cors")
const qna=require("./routes/qna");
const login=require("./routes/login");
const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost/chiefAdvisor")
                                               .then(()=>console.log("connected to db..."))
                                               .catch((err)=>console.error("Error: ",err))



app.use(express.json());
app.use(cors());
app.use("/qna",qna);
app.use("/login",login);


app.listen(3000,()=>{
    console.log("listening on the port 3000..");
}) 