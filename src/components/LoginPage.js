import { useState } from "react";
import { useNavigate } from "react-router-dom"

const apiUrl = "http://localhost:4000";

export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mockUsername = "sarajbeazley";
  const mockPassword = "stockroom21";

  function handleChange(event) {
    const { name, value } = event.target;
    console.log(`Input "${name}":`, value);
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log(username, password);
    console.log(mockUsername, mockPassword);

    if (username !== mockUsername || password !== mockPassword) {
      console.log("Login failed. Invalid credentials.");
    } else {
      console.log("Login successful");

      fetch(`${apiUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("Authentication token:", data.token); // Display the token in the console
          localStorage.setItem("authToken", data.token);
        
        });
      console.log("Authentication token:", localStorage.getItem("authToken"));

      navigate('/admin')
      console.log("Redirecting to admin dashboard...");

      setUsername("");
      setPassword("");

    }
  }

  return (
    <div className="page">
      <h1>
        Hello Sara! To access the admin dashboard, please enter your details
        below
      </h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <p>Username</p>
          <input
            className="text-box"
            type="text"
            placeholder="username"
            onChange={handleChange}
            name="username"
            value={username}
          />
        </div>
        <div className="input-container">
          <p>Password</p>
          <input
            className="text-box"
            type="password"
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <button className="admin-sign-button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
