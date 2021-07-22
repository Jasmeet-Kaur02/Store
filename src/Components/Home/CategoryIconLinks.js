import React, { useEffect } from "react";
import style from "../../CSS/CategoryIconLinks.module.css";
import { NavLink } from "react-router-dom";
import petsCategories from "../../dataJsonFiles/Category.json";
import Images from "../../dataJsonFiles/Images";

function CategoryIconLinks() {
  const [category, setCategory] = React.useState(null);

  useEffect(() => {
    setCategory(petsCategories);
  }, []);

  return (
    <>
      {category &&
        category.length > 0 &&
        category.map((item) => (
          <NavLink
            to={`/category/${item.id}`}
            key={item.id}
            activeClassName={style.selected}
            className={style.petIcon}
          >
            <img src={Images[item.name]} alt="pet" />
          </NavLink>
        ))}
    </>
  );
}

export default CategoryIconLinks;
