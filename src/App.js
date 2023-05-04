import Sidebar from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Topbar />} />
      </Routes>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
