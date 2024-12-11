import React from 'react';
import '../styles/Login.css';
import logo from '../assets/icons/favicon _1.png'; // Replace with your logo file path

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="VKraft Logo" className="login-logo" />
        <h2 className="welcome-text">Welcome Back</h2>
        <form className="login-form">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" />
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
