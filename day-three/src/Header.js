import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavLink to="/">
          <div>Home</div>
        </NavLink>
        <NavLink to="/add-book">
          <div>Add Book</div>
        </NavLink>
        <NavLink to="/">
          <div>View All Books</div>
        </NavLink>
      </div>
    );
  }
}

export default Header;
