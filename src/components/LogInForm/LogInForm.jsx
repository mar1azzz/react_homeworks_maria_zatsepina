import { useState } from "react";
import Button from "../Button/Button";
import "./LogInForm.css";

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = () => {
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("isLoggedIn", true);
      alert("Logged in successfully!");
      setError("");
      setUsername("");
      setPassword("");
    } else {
      const confirmRegistration = window.confirm(
        "The username and password do not exist. Would you like to register?"
      );
      if (confirmRegistration) {
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("isLoggedIn", true);
        alert("Account created and logged in successfully!");
        setError("");
        setUsername("");
        setPassword("");
      } else {
        setUsername("");
        setPassword("");
        setError("");
      }
    }
  };
  const handleCancel = () => {
    setUsername("");
    setPassword("");
    setError("");
  };

  return (
    <div className="login-page">
      <h2 className="login-title">Log In</h2>
      <div className="login-container">
        <div className="form-group-horizontal">
          <label htmlFor="username">User name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group-horizontal">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <div className="button-group">
          <Button
            buttonName="Submit"
            onClickHandler={handleLogin}
            isSelected={false}
          />
          <Button
            buttonName="Cancel"
            onClickHandler={handleCancel}
            isInverted={true}
          />
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
