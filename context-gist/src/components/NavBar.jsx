import React from "react";
import { Link } from "react-router-dom";
import "./nav-bar.css";

function NavBar() {
  return (
    <header className="nav-bar-header">
      <h3>
        <Link to="/">ContextAPI</Link>
      </h3>
      <nav>
        <ul className="nav-bar-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/1">Page 1</Link>
          </li>
          <li>
            <Link to="/2">Page 2</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
