import Sidebar from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
