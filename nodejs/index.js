const http = require('http');
const fs=require('fs')
/*const myserver = http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Abes college");
    }

    else if (req.url === '/about') {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <h2>About Page</h2>
            <img src="data:image/png;base64,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" />
        `);
    }

    else if (req.url === '/contact') {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("address");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 page not found");
    }
});

myserver.listen(8000, () => {
    console.log("server is running on port 8000");
});*/
//fs.writeFileSync("./cse-c.txt","hi we are coder in node")
//const result=fs.readFileSync("./cse-c.txt","utf-8");
//console.log(result);
//fs.writeFile("./a.txt","Atul kumar chauhan",()=>{})
/*fs.readFile("./a.txt","utf-8",(err,result)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(result);
    }
})*/
/*fs.writeFile("./b.txt","cse department",(err)=>{
    if(err)
    {
        console.log(err);
    }
})*/

//fs.appendFileSync("./b.txt"," Abes College")

/*fs.appendFile("./b.txt","ghaziabad",(err)=>{
    if(err)
    {
        console.log(err)
    }
})*/

//fs.cpSync("./a.txt","./c.txt")
//fs.cp("./b.txt","./c.txt",()=>{})
fs.cp("./a.txt","./c.txt",(err)=>{
    if(err)
    {
        console.log(err)
    }
})