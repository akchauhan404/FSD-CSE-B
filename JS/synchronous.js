function waitfortwoseconds()
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
console.log("other Application")