import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./bar.css";
import Home from "./home/home";
import About from "./about/about";
import Products from "./products/products";
import NotFound from "./notFound/notFound";

function NavBar() {
  return (
    <Router>
      <div className="bar">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products/PC">Products</Link>
            </li>
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/:type" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default NavBar;
