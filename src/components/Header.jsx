import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

function Header({ user, setToken, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Weather</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          {user ? (
            <>
              <li>
                <span>Welcome, {user}</span>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
