import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header.js";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
