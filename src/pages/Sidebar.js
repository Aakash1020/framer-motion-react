import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./styles/Sidebar.css";
import Home from "./Home";

const sidebar__style = {
  display: "grid",
  boxShadow: "0px 1px 10px rgba(0,0,0,0.7)",
  height: "100vh",
  width: "99%",
  justifyContent: "space-evenly",
  placeItems: "center",
};
const stylebar__components = {
  display: "flex",
  flexDirection: "column",
};
const icon__style = {
  //   padding: "10px 10px",
  fontSize: "50px",
  color: "black",
};

const Sidebar = () => {
  return (
    <>
      <section style={sidebar__style}>
        <NavLink to="/" exact>
          <div style={stylebar__components}>
            <HomeIcon style={icon__style} />
          </div>
        </NavLink>
        <NavLink to="/signup" exact>
          <div style={stylebar__components}>
            <ShoppingCartIcon style={icon__style} />
          </div>
        </NavLink>

        <NavLink to="/profile" exact>
          <div style={stylebar__components}>
            <AccountCircleIcon
              style={icon__style}
              className="sidebar__menuIcon"
            />
          </div>
        </NavLink>
      </section>
    </>
  );
};

export default Sidebar;
