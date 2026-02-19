const http=require('http')
const os=require('os')
const myserver=http.createServer((req,res)=>{
   
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json");
   
    // Route: /UserInfo
   
   if (req.url === "/UserInfo") {
    const userInfo = os.userInfo();
    res.writeHead(200);
    res.end(JSON.stringify(userInfo));
}

// Route: /cpu
else if (req.url === "/cpu") {
    const cpuInfo = os.cpus();
    res.writeHead(200);
    res.end(JSON.stringify(cpuInfo));
}

// Route: /memory
else if (req.url === "/memory") {
    const memoryInfo = {
        totalMemory: os.totalmem(),
        freeMemory: os.freemem()
    };
    res.writeHead(200);
    res.end(JSON.stringify(memoryInfo));
}

// Route: /platform
else if (req.url === "/platform") {
    const platformInfo = {
        platform: os.platform(),
        release: os.release()
    };
    res.writeHead(200);
    res.end(JSON.stringify(platformInfo));
}

// If route not found
else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Route not found" }));
}
});
myserver.listen(8000,(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else
    {
    console.log("server is running at port 8000")
    }
}
)