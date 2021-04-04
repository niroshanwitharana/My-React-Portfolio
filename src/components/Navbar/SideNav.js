import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import "./Navbar.css";

export default function SideNav() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li class="logo">
          <a href="https://niroshanwitharana.github.io/My-Portfolio/portfolio.html" class="nav-link">
            <span className="link-text">Portfolio</span>
            <DoubleArrowIcon />
          </a>
        </li>
        <li className="nav-item">
          <a href="https://niroshanwitharana.github.io/My-Portfolio/portfolio.html" className="nav-link">
            <HomeIcon />
            <span className="link-text">About Me</span>
          </a>
        </li>        
        <li className="nav-item">
          <a href="https://niroshanwitharana.github.io/My-Portfolio/portfolio.html" className="nav-link">
            <FavoriteIcon />
            <span className="link-text">Education</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://niroshanwitharana.github.io/My-Portfolio/portfolio.html" className="nav-link">
            <SettingsIcon />
            <span className="link-text">Works</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="https://niroshanwitharana.github.io/My-Portfolio/portfolio.html" className="nav-link">
            <InvertColorsIcon />
            <span className="link-text">Contacts</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
