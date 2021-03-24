console.log("Main js connect..");

async function getMarks(){
    console.log("Get marks called")
    const input=document.getElementById("rolls");
    console.log(input.value)
    const myTable=document.createElement("table");
    const rollNumebrs=input.value.split(",")
    console.log(rollNumebrs);
    rollNumebrs.forEach(roll=>{
        apiResult(roll);
    })
    document.getElementById("output").innerText=rollNumebrs;
}
async function apiResult(rollno){
    let resu=await fetch("https://terriblytinytales.com/testapi?rollnumber="+rollno);
    console.log(resu)
}