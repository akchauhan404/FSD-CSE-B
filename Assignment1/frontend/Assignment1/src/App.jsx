import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home.jx";
import Work from "./pages/Work.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
