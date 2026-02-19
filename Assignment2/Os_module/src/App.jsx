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
      <div id="display">{data}</div>
      <button onClick={UserInfo}>UserInfo</button>
      <button onClick={cpu}>Cpu Arch</button><br/>
      <button onClick={memory}>total memory</button>
      <button onClick={platform}>platform</button>
    </>
  )
}
export default App
