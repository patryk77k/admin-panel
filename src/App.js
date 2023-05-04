import Sidebar from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import Home from "./pages/home/Home";
import NewUser from "./pages/newPage/NewUser";
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
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:productId" element={<ProductList />} />
          <Route path="/newproduct" element={<ProductList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
