/*function waitfortwoseconds()
{
    const ms=new Date().getTime()+8000;
    while(new Date().getTime()<ms);
}
function register()
{
    waitfortwoseconds();
    console.log("register end");
}
function sendemail()
{
    waitfortwoseconds();
    console.log("email end");
}
function login()
{
    waitfortwoseconds();
    console.log(" login end");
}
function getData()
{
    waitfortwoseconds();
    console.log("data end");
}
function displayData()
{
    waitfortwoseconds();
    console.log("Display end");
}
register();
sendemail();
login();
getData();
displayData();
console.log("other Application")*/

//callback hell
 
function register(cb){
    setTimeout(()=>{
        console.log("register end");
        cb();
    },2000)
}
function sendemail(cb){
    setTimeout(()=>{
        console.log("email end");
        cb();
    },2000)
}
function login(cb){
    setTimeout(()=>{
        console.log("login end");
        cb();
    },2000)
}
function getData(cb){
    setTimeout(()=>{
        console.log("data end");
        cb();
    },2000)
}
function displayData(){
    setTimeout(()=>{
        console.log("display end");
    },2000)
}

register(()=>{
    sendemail(()=>{
        login(()=>{
            getData(()=>{
                displayData();
            })
        })
    })
})

console.log("other Applications");