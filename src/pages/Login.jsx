import React, { useState } from "react";
import "./Login.css"; 
import logo from "../images/Logo.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5122/api/Auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("username", data.username);
      navigate("/dashboard");
    } else {
      alert("Đăng nhập thất bại: " + data.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleLogin}>
          <h1 className="login-title">Login</h1>
          <label className="input-label">Username</label>
          <input type="text" className="input-field" onChange={e => setUsername(e.target.value)} />
          <label className="input-label">Password</label>
          <input type="password" className="input-field" onChange={e => setPassword(e.target.value)}/>
          <button className="login-button">Login</button>
          <div className="login-links">
            <a href="#" className="link">
              Don't have an account? Register
            </a>
            <a href="#" className="link">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
    </div>
  );
};

export default Login;
