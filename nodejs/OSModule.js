const os= require('os');
console.log("platform:", os.platform());
console.log("userInfo:",os.userInfo())
console.log("CPU", os.arch())
console.log("free memory:", os.freemem())
console.log("total memory:",os.totalmem())
console.log("uptime",os.uptime())
console.log("home dir:", os.homedir());
console.log("host name", os.hostname())