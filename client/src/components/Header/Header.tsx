import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src="https://raw.githubusercontent.com/QAZIMAAZARSHAD/Movie-Streaming-Website/master/Images/TheaterLogoFinal.png"
          className="img-logo"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Header;
