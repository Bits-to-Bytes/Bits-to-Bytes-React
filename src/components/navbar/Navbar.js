import React from "react";
import { Component } from "react";

import "./navbar.css";

class NavBar extends Component {
  // const navList =
  render() {
    const { navBarItems } = this.props;
    console.log(navBarItems);
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">
          <img src="./assets/logo.png" alt="logo" className="navbar-logo" />
          Bits to Bytes
        </a>
        <div className="navbar-itm-container">
          {navBarItems.map((item) => {
            return (
              <NavBarItem title={item.title} link={item.link} key={item.key} />
            );
          })}
        </div>
      </nav>
    );
  }
}

export default NavBar;

const NavBarItem = ({ title, link, key }) => {
  return (
    <a href={link} className="navbar-itm" key={key}>
      {title}
    </a>
  );
};
