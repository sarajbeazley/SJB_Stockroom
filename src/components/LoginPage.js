import { useState } from "react";

export default function LoginPage() {
  const [login, setLogin] = useState({
    username: " ",
    password: " ",
  });

  console.log(login);

  function handleChange(event) {
    setLogin((prevLogin) => {
      return {
        ...prevLogin,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLogin({
      username: " ",
      password: " ",
    });
    console.log(login)
  }


  return (
    <div className="page">
      <h1>Hello Sara, to log in please enter your details below</h1>
      <form className="form">
      <div className="input-container">
        <p>Username</p>
      <input className="text-box" onSubmit={handleSubmit}
        type="text"
        placeholder="username"
        onChange={handleChange}
        name="username"
        value={login.username}
      />
      </div>
      <div className="input-container">
      <p>Password</p>
      <input className="text-box" onSubmit={handleSubmit}
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="password"
        value={login.password}
      />
      </div>
      <button className="admin-sign-button">Sign In</button>
      </form>
    </div>
  );
}
