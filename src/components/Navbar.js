import React, { Component } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import Signin from "./Signin";

class Navbar extends Component {
  state = {
    clicked: false,
    signinPopup: false, // Manage Signin popup state
  };

  // Toggle the menu state
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  // Toggle the Signin popup
  toggleSigninPopup = (e) => {
    e.preventDefault(); // Prevent default page navigation
    this.setState({ signinPopup: !this.state.signinPopup });
  };

  render() {
    return (
      <>
        <nav className="NavbarItems">
          <h1 className="navbar-logo">Explore Vista</h1>

          {/* Toggle Menu Icon */}
          <div className="menu-icons" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>

          {/* Navigation Menu */}
          <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuItems &&
              MenuItems.map((item, index) => {
                if (item.title === "Signup") {
                  return (
                    <li key={index} className="nav-item">
                      <button
                        onClick={this.toggleSigninPopup}
                        className={item.cName}
                      >
                        {item.title}
                      </button>
                    </li>
                  );
                } else {
                  return (
                    <li key={index} className="nav-item">
                      <Link to={item.url} className={item.cName}>
                        <i className={item.icon}></i>
                        {item.title}
                      </Link>
                    </li>
                  );
                }
              })}
          </ul>
        </nav>

        {/* Signin Popup */}
        {this.state.signinPopup && <Signin onClose={this.toggleSigninPopup} />}
      </>
    );
  }
}

export default Navbar;
