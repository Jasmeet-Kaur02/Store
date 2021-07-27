import React from "react";
import classnames from "classnames";
import "../CSS/Sidebar.css";
import { Divider } from "@material-ui/core";
import dividerStyle from "../CSS/IconStyle";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [show, setShow] = React.useState(false);
  const classes = dividerStyle();
  const currPath = useLocation().pathname;
  console.log(currPath);

  const line1 = classnames("line", { line1: show });
  const line2 = classnames("line", { line2: show });
  const line3 = classnames("line", { line3: show });
  const sidebar = classnames("sidebar", { open: show });
  const links = [
    { name: "Home", path: "/", id: 1 },
    { name: "My Cart", path: "/checkout", id: 2 },
    { name: "Orders", path: "/order", id: 3 },
    { name: "Favorites", path: "/favorite", id: 4 },
    { name: "Profile", path: "/profile", id: 5 },
  ];

  return (
    <>
      <section className="section">
        <div
          className="navIcon"
          onClick={() => setShow((prev) => (prev ? false : true))}
        >
          <span className={line1}></span>
          <span className={line2}></span>
          <span className={line3}></span>
        </div>
      </section>

      <div className={sidebar}>
        <div className="sidebarHeader">
          <h3>PetsStore</h3>
        </div>
        <div className="sidebarBody">
          <ul>
            {links.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className="link"
                activeClassName={link.path === currPath ? "link-active" : null}
              >
                <li className="link-items">{link.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        <Divider className={classes.divider} />
        <ul className="sidebarFooter">
          <li>Sign Out</li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
