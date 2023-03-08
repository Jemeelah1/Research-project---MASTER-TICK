import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TaskBoard from "./Components/taskboard";
import Welcome from "./Components/welcome";
import SignUp from "./Components/signUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/taskboard" element={<TaskBoard />} />
        <Route path="/signup" element={<SignUp  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
