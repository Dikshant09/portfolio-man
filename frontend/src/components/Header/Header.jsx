import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const path = window.location.pathname;
  return (
    <div className={path !== '/' ? 'headerContainer' : 'headerContainer centerBro' } >
      {/* // <div className= "headerContainer"> */}
      <ul>
        {["Home", "about", "projects", "contact"].map((item, index) => (
          <Link
          to={item === "Home" ? "/" : item}
            style={{ textDecoration: "none" }}
            key={index}
            >
            <li key={index}>{item.charAt(0).toUpperCase() + item.slice(1)}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Header;