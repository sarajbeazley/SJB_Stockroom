import { useState } from "react";

export default function LoginPage({ setIsLoggedIn }) {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState(" ");

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log (username, password)

    const mockUsername = "sarajbeazley";
    const mockPassword = "stockroom21";

    if (username === mockUsername && password === mockPassword) {
      setIsLoggedIn(true);
    } else {
      console.log("Login failed. Invalid credentials.");
    }
  }

  return (
    <div className="page">
      <h1>Hello Sara! To access the admin dashboard, please enter your details below</h1>
      <form className="form" onSubmit={handleSubmit}>
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
