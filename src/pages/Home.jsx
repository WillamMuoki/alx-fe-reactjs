import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    alert("Logged in!");
  };
  const handleLogout = () => {
    localStorage.removeItem("auth");
    alert("Logged out!");
  };
  return (
    <div>
      <h2>Home Page</h2>
      <p>Use the buttons below to simulate login/logout:</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <p>
        Go to <Link to="/profile">Profile</Link> (Protected)
      </p>
    </div>
  );
}
