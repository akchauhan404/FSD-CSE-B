/*
// using promises
function register() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("register end");
        resolve();
      }, 2000);
    });
  }
  
  function sendEmail() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("send email end");
        resolve();
      }, 3000);
    });
  }
  
  function login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("login end");
        resolve();
      }, 1000);
    });
  }
  
  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("get data end");
        resolve();
      }, 2000);
    });
  }
  
  function displayData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("display data end");
        resolve();
      }, 2000);
    });
  }

  console.log("call other application");

register()
  .then(sendEmail)
  .then(login)
  .then(getData)
  .then(displayData)
  .then(() => {
    console.log("All tasks finished");
  })
  .catch((err) => console.error("Error:", err));
*/

//using async and await
function register() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("register end");
        resolve();
      }, 2000);
    });
  }
  
  function sendEmail() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("send email end");
        resolve();
      }, 3000);
    });
  }
  
  function login() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("login end");
        resolve();
      }, 1000);
    });
  }
  
  function getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("get data end");
        resolve();
      }, 2000);
    });
  }
  
  function displayData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("display data end");
        resolve();
      }, 2000);
    });
  }
  
  async function execute() {
    console.log("call other application");
  
    await register();
    await sendEmail();
    await login();
    await getData();
    await displayData();
  
    console.log("All tasks finished ");
  }
  
  execute().catch((err) => console.error("Error:", err));
  