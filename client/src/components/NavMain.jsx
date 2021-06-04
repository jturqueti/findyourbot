import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  function handleLogout() {
    apiHandler
      .logout()
      .then(() => {
        context.removeUser();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <h3 className="logo">App name</h3>
      </NavLink>
      <ul className="nav-list">
        <li><NavLink to="/solutions">All bots</NavLink></li>
        <li><NavLink to="/faq">What is a bot ?</NavLink></li>
        <li><NavLink to="/browse">Find my solution</NavLink></li>
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
