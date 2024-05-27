import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WeatherPage from "./pages/Weather/WeatherPage";
import HistoryPage from "./pages/History/HistoryPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState(localStorage.getItem("username"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    setUser(localStorage.getItem("username"));
  }, []);

  return (
    <Router>
      <Header user={user} setToken={setToken} setUser={setUser} />
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route
          path="/login"
          element={<LoginPage setToken={setToken} setUser={setUser} />}
        />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
