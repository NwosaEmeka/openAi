import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__content-left">
          <div className="logo">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="navbar__items">
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <a href="#home" className="navlinks">
                  Home
                </a>
              </li>
              <li className="navbar__list-item">
                <a href="#what_is_gpt3" className="navlinks">
                  What is GPT?
                </a>
              </li>
              <li className="navbar__list-item">
                <a href="#open-ai" className="navlinks">
                  Open AI
                </a>
              </li>
              <li className="navbar__list-item">
                <a href="#case-study" className="navlinks">
                  Case Studies
                </a>
              </li>
              <li className="navbar__list-item">
                <a href="#libraries" className="navlinks">
                  Libraries
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar__content-right">
          <button className="navbar__btn navbar__btn-signin">Sign in</button>
          <button className="navbar__btn navbar__btn-signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
