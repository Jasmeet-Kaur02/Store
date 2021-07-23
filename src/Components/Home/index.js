import React from "react";
import "../../CSS/HomeScreenStyle.css";
import Introduction from "./Introduction";
import CategoryIconLinks from "./CategoryIconLinks";
import Cards from "../Cards";
import PetsInfo from "../../dataJsonFiles/Pets.json";

const Home = () => {
  return (
    <>
      <Introduction />

      <div className="links">
        <CategoryIconLinks />
      </div>

      <div className="cardsContainer">
        <Cards items={PetsInfo} />
      </div>
    </>
  );
};

export default Home;
