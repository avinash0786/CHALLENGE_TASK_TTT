const express=require("express");
require("dotenv").config();
const fetch = require('node-fetch');
const path=require("path")
const bodyparser= require('body-parser');

const app=express();
app.use(express.static(path.join(__dirname,"./script")));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", async (req,res)=>{
    res.sendFile(path.join(__dirname,"./views/temp.html"));
})
app.post('/getResult',async (req, res) => {
    console.log("Post called")
    console.log(req.body)
    const rollNumbers=req.body.rollNumbers.split(",");
    console.log(rollNumbers)
    let promisResults=[];
    rollNumbers.forEach(rol=>{
        let answer=fetch("https://terriblytinytales.com/testapi?rollnumber="+rol);
        promisResults.push(answer);
    })
    Promise.all(promisResults)
        .then(d=>{
            let lis=[];
            d.forEach(pr=>{
                lis.push(Promise.resolve(pr.text().then(ff=>[pr.url.slice(49),ff])))
            })
            Promise.all(lis)
                .then(ds=>{
                    console.log("Internal res")
                    console.log(ds)
                    return res.jsonp(ds)
                })
        })
        .catch(e=>{
            console.log(e)
        })
})

app.listen(process.env.PORT, function(req,result){
    console.log(" Server up and running:: http://localhost:3000")
})