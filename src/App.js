import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Footer } from "./container";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
