import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import mainTheme from "./themes/main";
import Home from "./pages/Home/Home";
import SignUp from "./pages/SignUp/SignUp";
import "./App.css";
import Login from "./pages/Login/Login";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
