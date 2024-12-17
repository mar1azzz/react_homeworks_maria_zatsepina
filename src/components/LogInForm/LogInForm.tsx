import { useState } from "react";
import Button from "../Button/Button";
import "./LogInForm.css";
import { User } from "../../types/LogInForm";

const LogInForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = () => {
    if (!username || !password) {
      setError("Both fields are required.");
      return;
    }

    const storedUsers = localStorage.getItem("users");
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      alert("Logged in successfully!");
      resetForm();
    } else {
      const confirmRegistration = window.confirm(
        "The username and password do not exist. Would you like to register?"
      );
      if (confirmRegistration) {
        const newUser: User = { username, password };
        const updatedUsers = [...users, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        localStorage.setItem("isLoggedIn", "true");
        alert("Account created and logged in successfully!");
        resetForm();
      } else {
        resetForm();
      }
    }
  };

  const handleCancel = () => {
    resetForm();
  };

  const resetForm = () => {
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
          <Button buttonName="Submit" onClickHandler={handleLogin} />
          <Button buttonName="Cancel" onClickHandler={handleCancel} isInverted />
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
