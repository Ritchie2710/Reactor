import { useState } from "react";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>React Router Dom</h1>
        <link to="/">Home</link>
        <link to="/about">About</link>
      </header>

      <Routes>
        <route path="/" element={<Home />} />
        <route path="/about" element={<About />} />
      </Routes>

      <p>
        React Router Dom allows us to have multiple pages in our SPA (Single
        Page Application)
      </p>

      <footer>
        <p>&copy; Tim the Bin</p>
      </footer>
    </BrowserRouter>
  );
}
export default App;
