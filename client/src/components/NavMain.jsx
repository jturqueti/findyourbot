import React from "react";
import { NavLink } from "react-router-dom";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";

import "../styles/NavMain.css";

const NavMain = (props) => {
  const { context } = props;

  // function handleLogout() {
  //   apiHandler
  //     .logout()
  //     .then(() => {
  //       context.removeUser();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <nav className="NavMain">
      <NavLink exact to="/">
        <h2 className="titre-logo">Find Your Bot</h2>
      </NavLink>
      <ul className="nav-list">
        <li><NavLink to="/solutions">Liste des solutions</NavLink></li>
        <li><NavLink to="/browser">Trouver ma solution</NavLink></li>
      </ul>
    </nav>
  );
};

export default withUser(NavMain);
