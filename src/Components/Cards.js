import React from "react";
import styles from "../CSS/CardStyle.module.css";
import { useCart } from "../misc/custom-hooks";
import { Redirect } from "react-router-dom";

const Cards = ({ items }) => {
  const [cartItems, dispatch] = useCart();
  const [redirect, setRedirect] = React.useState(false);

  const AddHandler = (item) => {
    console.log(cartItems);
    const { img, breed, price, id } = item;
    const newItem = { img, breed, price, id, quantity: 1 };
    dispatch({ type: "ADD", newItem: newItem });
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect push to="/checkout"></Redirect>;
  }
  return (
    <>
      {items.map((item) => (
        <div className={styles.card} key={item.id}>
          <div className={styles.cardHeader}>
            <img src={item.img} alt="pets" />
          </div>
          <div className={styles.cardBody}>
            <h4 className={styles.title}>{item.breed}</h4>
            <p className={styles.descript}>{item.descript}</p>
            <h3 className={styles.price}>₹{item.price}</h3>
            <div className={styles.cardFooter}>
              <button className={styles.btn} onClick={() => AddHandler(item)}>
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
