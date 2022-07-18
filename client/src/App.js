import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import AsteroidComponent from "./Components/AsteroidsComponent";
import HomePage from "./Pages/HomePage";
import AsteroidsPage from "./Pages/AsteroidsPage";
import MarsPage from "./Pages/MarsPage";

function App() {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/asteroidPage" element={<AsteroidsPage/>} />
        <Route path="/marsPage" element={<MarsPage/>} />
    
      </Routes>
    </div>
  );
}

export default App