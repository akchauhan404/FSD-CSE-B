/*const url="https://dummyjson.com/users?limit=5";
const pr=fetch(url);
      pr.then((res)=>{
        return res.json();
      })
      .then((data)=>{
        data.users.forEach((da)=>{
        console.log("name=",da.firstName);
        console.log("email=",da.email);
        console.log("ip=",da.ip);
        console.log("Mac Address=",da.macAddress);
      })
    })
      .catch((err)=>{
        console.error("Error:",err.message)
      })
      */

//using async and await

const f1 = async()=>{
    try{
        const res=await fetch("https://dummyjson.com/users?limit=2");
        const jsondata=await res.json();
        jsondata.users.forEach((da)=>{
            console.log("name=",da.firstName);
            console.log("email=",da.email);
            console.log("IP=",da.ip);
            console.log("Mac Address=",da.macAddress);
            console.log("");
        })
    }
    catch(err){
        console.log("Error",err.message);
    }
}
f1();