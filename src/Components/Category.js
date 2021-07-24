import React, { useEffect } from "react";
import Cards from "./Cards";

import Pets from "../dataJsonFiles/Pets.json";
import { useParams } from "react-router";

const getCategory = (id) => {
  return Pets.filter((item) => item.categoryId === id);
};

const Category = () => {
  const [category, setCategory] = React.useState(null);
  const { categoryId } = useParams();

  useEffect(() => {
    setCategory(getCategory(categoryId));
  }, [categoryId]);

  return (
    <>
      {category && category.length > 0 && (
        <div className="cardsContainer">
          <Cards items={category} />
        </div>
      )}
    </>
  );
};

export default Category;
