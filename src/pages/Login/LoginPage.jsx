import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage({ setToken, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user/login/", {
        email,
        password,
      });
      const { token } = response.data;
      setToken(token);
      localStorage.setItem("token", token);

      setTimeout(async () => {
        const userInfoResponse = await axios.get(
          "http://localhost:8000/user/",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const { username } = userInfoResponse.data;
        setUser(username);
        localStorage.setItem("username", username);
        alert(username);

        navigate("/");
      }, 1);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default LoginPage;
