import { useState } from "react";
import { NavLink } from "react-router-dom";

function SignUp() {
  const [user, setUser] = useState({});

  const inputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(user);
  };

  const inputSubmit = () => {
    fetch("http://localhost:8080/api/signup", {
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
          console.log("signed up");
        }
      });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Home</NavLink>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={inputChange}
      ></input>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={inputChange}
      ></input>
      <button onClick={inputSubmit}>Submit</button>
    </div>
  );
}

export default SignUp;
