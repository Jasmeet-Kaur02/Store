import React from "react";
import classnames from "classnames";
import "../CSS/Sidebar.css";

const Sidebar = () => {
  const [show, setShow] = React.useState(false);
  const line1 = classnames("line", { line1: show });
  const line2 = classnames("line", { line2: show });
  const line3 = classnames("line", { line3: show });
  const sidebar = classnames("sidebar", { open: show });
  console.log(show);
  return (
    <div>
      <section className="section">
        <div
          className="navIcon"
          onClick={() => setShow((prev) => (prev ? false : true))}
        >
          <span className={line1}></span>
          <span className={line2}></span>
          <span className={line3}></span>
        </div>

        <div className={sidebar}></div>
      </section>
    </div>
  );
};

export default Sidebar;
