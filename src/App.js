import React, { useState } from "react";
import Orders from "./Orders";

const mockUserData = {
  username: "testuser",
  email: "testuser@example.com",
  password: "password123"
};

const LoginPage = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      usernameOrEmail === mockUserData.username ||
      usernameOrEmail === mockUserData.email
    ) {
      if (password === mockUserData.password) {
        // Successful login, set loggedIn to true
        setSuccessMsg("Logged In");
        setError("");
        setLoggedIn(true);
        console.log("Login successful!");
      } else {
        setSuccessMsg("");
        setError("Invalid password");
      }
    } else {
      setError("Invalid username or email");
    }
  };

  if (loggedIn) {
    return <Orders />;
  }

  return (
    <div>
      <h1>Login</h1>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <span style={{ color: "green" }}>{successMsg}</span>
        <br />
        <label>
          Username or Email:
          <input
            type="text"
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Log In</button>
      </form>
      <br />
      <div>Username - {mockUserData.username}</div>
      <div>Email - {mockUserData.email}</div>
      <div>Password - {mockUserData.password}</div>
    </div>
  );
};

export default LoginPage;
