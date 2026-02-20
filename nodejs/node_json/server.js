const http=require('http')
const fs= require('fs')

const myserver=http.createServer((req,res)=>{
    if(req.method=="GET" && req.url=="/user")
    {
        const user=readData()
        res.end(JSON.stringify(user));
    }
    if(req.method=="POST" && req.url=="/user")
    {
        let body="";
        req.on("data",chunk=>{
        body+=chunk.toString();
    });
        req.on("end",()=>{
            try{
            const user=readData();
            const newuser=JSON.parse(body)
            newuser.id=user.length+1;
            user.push(newuser);
            writedata(user);
            res.end("user added")
        }
        catch(err)
        {
            console.log(err);
        }
        })
    }
    if(req.method=="PUT" && req.url=='/user')
    {
        let body=""
        req.on("data",chunk=>{
            body+=chunk.toString();
        })
        res.on("end",()=>{
            try{
            const user=readData();
            const updateUser=JSON.parse(body);
            for(let i=0;i<user.length;i++)
            {
                if(updateUser.id==user[i].id)
                {
                    user[i].name=updateUser.name;
                    user[i].age=updateUser.age;
                    break;
                }
            }
            writedata(user);
            res.end("user updated");
        }
        catch(err)
        {
            console.log(err)
        }
    })
    }

})
function readData()
{
    const data=fs.readFileSync("user.json")
    return JSON.parse(data)
}
function writedata(data)
{
    fs.writeFileSync("user.json",JSON.stringify(data,null,2));
}
 myserver.listen(8000,(err)=>
 {
    if(err)
    console.log(err)
    else
    console.log("server is running on port 8000")
 })