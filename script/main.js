console.log("Main js connect..");

async function getMarks(){
    document.getElementById("subButton").style.display="none";
    document.getElementById("wait").style.display="block"
    console.log("Get marks called")
    const rolls=document.getElementById("rollNumbers").value.match(/\d+/g);
    console.log(rolls)

    fetch('/getResult',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'rollNumbers='+rolls
    }).then(d=>{
        console.log(d.json().then(fin=> {
            console.log("Result recieved")
            console.log(fin)
            const table=document.createElement("table");
            table.style.border="3px solid grey";
            table.style.margin="3%";
            table.style.fontSize="40px"
            table.style.backgroundColor="white"
            let row=table.insertRow();
            row.style.backgroundColor="lightRed"
            row.style.border="3px solid grey"
            let th1=row.insertCell()
            let th2=row.insertCell()
            th1.style.border="3px solid BLUE";
            th2.style.border="3px solid Blue";
            th1.style.padding="5px";th2.style.padding="5px";
            th1.appendChild(document.createTextNode("Roll no"));
            th2.appendChild(document.createTextNode("Marks"));

            for(let i=0;i<fin.length;i++){
                console.log(fin[i][0]+"  "+fin[i][1]);
                let row=table.insertRow();
                let th1=row.insertCell()
                th1.style.border="3px dotted grey";
                let th2=row.insertCell()
                th2.style.border="3px dotted grey";
                th1.style.padding="3px";th2.style.padding="3px";
                th1.appendChild(document.createTextNode(fin[i][0]));
                th2.appendChild(document.createTextNode(fin[i][1]));
                if (fin[i][1]=="Pass")
                    th2.style.color="green"
                else
                    th2.style.color="red"
            }
            table.style.borderCollapse="collapse";
            document.getElementById("marks").innerHTML="";
            document.getElementById("marks").append(table);
            document.getElementById("subButton").style.display="block";
            document.getElementById("wait").style.display="none"
        }))
    }).catch(e=>{
        console.log("Error IN API")
    })
}
