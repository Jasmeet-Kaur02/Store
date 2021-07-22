import React from "react";
import "../../CSS/HomeScreenStyle.css";
import Introduction from "./Introduction";
import CategoryIconLinks from "./CategoryIconLinks";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="links">
        <CategoryIconLinks />
      </div>
    </>
  );
};

export default Home;
