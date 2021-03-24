const express=require("express");
require("dotenv").config();
const fetch = require('node-fetch');

const path=require("path")
const cors = require('cors');
const bodyparser= require('body-parser');

const app=express();
app.use(cors());
app.use(express.static(path.join(__dirname,"./script")));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", async (req,res)=>{
    res.sendFile(path.join(__dirname,"./views/temp.html"));
})
app.post('/getResult',async (req, res) => {
    console.log("Post called")
    console.log(req.body)
    const rollNumebrs=req.body.rollNumbers.split(",")
    console.log(rollNumebrs)
    const answer=await fetch("https://terriblytinytales.com/testapi?rollnumber=123");
    // const json=await answer.json();
    console.log(answer)
    return res.send(answer);
})

app.listen(process.env.PORT, function(req,result){
    console.log(" Server up and running:: http://localhost:3000")
})