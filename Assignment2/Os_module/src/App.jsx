import { useState } from "react";
function App() {
  const [data, setData] = useState("Click any button");
  const UserInfo=async(res)=>
  {
    res=await fetch("http://localhost:8000/UserInfo");
    const json= await res.json();
    setData(JSON.stringify(json, null, 2));
  }
  const cpu=async(res)=>
  {
    res=await fetch("http://localhost:8000/cpu");
    const json= await res.json();
    setData(JSON.stringify(json, null, 2));
  }
  const memory=async(res)=>
  {
    res=await fetch("http://localhost:8000/memory");
    const json= await res.json();
    setData(JSON.stringify(json, null, 2));
  }
  const platform=async(res)=>
  {
    res=await fetch("http://localhost:8000/platform");
    const json= await res.json();
    setData(JSON.stringify(json, null, 2));
  }
  return (
    <>
      <h1>Work with OS</h1>
      <br/>
      <div id="display"
       style={{
        border: "1px solid black",
        padding: "10px",
        minHeight: "150px",
        whiteSpace: "pre-wrap"
      }}
      >{data}</div>
      <button 
      style={{
        padding:"10px",
        margin:"50px",
        color:"yellow"
      }

      }
      onClick={UserInfo}>UserInfo</button>
      <button 
      style={{
        padding:"10px",
        margin:"50px",
        color:"yellow"
      }

      }
      onClick={cpu}>Cpu Arch</button><br/>
      <button 
      style={{
        padding:"10px",
        margin:"50px",
        backgroundColor:"yellow"
      }

      }
      onClick={memory}>total memory</button>
      <button 
      style={{
        padding:"10px",
        margin:"50px",
        color:"yellow"
      }

      }
      onClick={platform}>platform</button>
    </>
  )
}
export default App
