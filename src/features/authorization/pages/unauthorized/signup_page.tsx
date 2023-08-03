import React, { useState } from "react";
import "./signup.css";

export default function SignupPage() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(e.target.value);
  };

  const handlePasswordChange = (e: React.FormEvent<HTMLFormElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add your login logic here.
    console.log("Login submitted!");
  };
  return (
    <>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </>
  );
}



      // <form className="login">
      //   <input type="text" placeholder="Username">
      //     <input type="password" placeholder="Password">
      //       <button>Login</button>
      //     </form>
      //
      //     <a href="https://codepen.io/davinci/" target="_blank">check my other pens</a>
