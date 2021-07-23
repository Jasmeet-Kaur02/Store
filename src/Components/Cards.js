import React from "react";
import styles from "../CSS/CardStyle.module.css";

const Cards = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <img src={item.img} />
          </div>
          <div className={styles.cardBody}>
            <h4 className={styles.title}>{item.breed}</h4>
            <p className={styles.descript}>{item.descript}</p>
            <h3 className={styles.price}>₹{item.price}</h3>
            <div className={styles.cardFooter}>
              <button className={styles.btn}>View Details</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
