import React from "react";
import catImage from "../../Images/cat-6.jpg";
import "../../CSS/HomeScreenStyle.css";

const Introduction = () => {
  return (
    <div className="wrapper">
      <div>
        <h1>Find Your Pets With Us</h1>
        <div>
          <p>Welcome to PetsStore here you can find your perfect pets</p>
        </div>
      </div>

      <img src={catImage} alt="pet" className="img" />
    </div>
  );
};

export default Introduction;
