import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function LoginPage() {
  const [user, setUser] = useState({});

  const handleLoginChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const confirmLogin = () => {
    fetch("http://localhost:8080/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result) {
          console.log("logged in");
        }
        if (!result) {
          console.log("nope");
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <NavLink to="/signup">
        <div>signup</div>
      </NavLink>
      <NavLink to="/">
        <div>Home</div>
      </NavLink>
      <input
        type="text"
        name="username"
        onChange={handleLoginChange}
        placeholder="User name"
      />
      <input
        type="password"
        name="password"
        onChange={handleLoginChange}
        placeholder="Password"
      />
      <button onClick={confirmLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
