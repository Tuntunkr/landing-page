import React, { useState } from "react";
// import logo from '../images/logo.png'

function Navbar() {
  const [nav, setNav] = useState(false);

  const changebackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changebackground);

  return (
    <nav className={nav ? "nav-active" : "nav"}>
      <a href="/" className="logo">
        {/* <img src={logo} alt=""/> */}
        <h2>
          Edu<apn>learn</apn>
        </h2>
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="/" className="nav active">
            About
          </a>
        </li>
        <li>
          <a href="/Categories">Categories</a>
        </li>
        <li>
          <a href="/Course">Course</a>
        </li>
        <li>
          <a href="/Contact">Contact</a>
        </li>
        <li>
          <a href="Login">Login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
