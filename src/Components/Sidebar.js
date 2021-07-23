import React from "react";
import ReactDom from "react-dom";
import classnames from "classnames";
import "../CSS/Sidebar.css";
import { Divider } from "@material-ui/core";
import dividerStyle from "../CSS/IconStyle";

const Sidebar = () => {
  const [show, setShow] = React.useState(false);
  const classes = dividerStyle();

  const line1 = classnames("line", { line1: show });
  const line2 = classnames("line", { line2: show });
  const line3 = classnames("line", { line3: show });
  const sidebar = classnames("sidebar", { open: show });
  const sidebarRoot = document.getElementById("sidebar-root");
  console.log(show);

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
      {ReactDom.createPortal(
        <div className={sidebar}>
          <div className="sidebarHeader">
            <h3>PetsStore</h3>
          </div>
          <div className="sidebarBody">
            <ul>
              <li>Home</li>
              <li>Profile</li>
              <li>My Cart</li>
              <li>Favorites</li>
              <li>Orders</li>
            </ul>
          </div>
          <Divider className={classes.divider} />
          <ul className="sidebarFooter">
            <li>Sign Out</li>
          </ul>
        </div>,
        sidebarRoot
      )}
    </>
  );
};

export default Sidebar;
