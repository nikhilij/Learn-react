import React from "react"; // Don't forget to import React
import logo from "./logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <div className="logo-container">
        <a href="#">
          <div className="logo">
            <img src={logo} id="logo" alt="logo of weather app" />
          </div>
          <h1 id = "weather-app">Weather App</h1> {/* Moved the h1 outside the anchor tag */}
        </a>
      </div>
      <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
