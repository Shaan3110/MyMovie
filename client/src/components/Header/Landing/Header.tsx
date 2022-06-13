import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-dark"
      id="header-nav"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="home/">
          <img
            className="logo"
            src="https://raw.githubusercontent.com/QAZIMAAZARSHAD/Movie-Streaming-Website/master/Images/TheaterLogoFinal.png"
            alt=""
          />
        </a>
        <button
          id="nav"
          className="navbar-toggler"
          style={{ backgroundColor: "#8b0000" }}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span
            className="navbar-toggler-icon"
            style={{ backgroundColor: "dark-grey" }}
          />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active" aria-current="page" href="home/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="movies/">
                Movies
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="movies/">
                Web Series
              </a>
            </li>
          </ul>
          <form id="searchForm" className="d-flex w-30">
            <button
              className="btn btn-danger"
              type="submit"
              style={{ marginRight: "30px" }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </button>
            <button
              className="btn btn-danger"
              type="submit"
              style={{ marginRight: "30px" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
