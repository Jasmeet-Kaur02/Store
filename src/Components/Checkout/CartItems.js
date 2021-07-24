import React from "react";
import "../../CSS/Checkout.css";
import Delete from "@material-ui/icons/DeleteOutline";
import Add from "@material-ui/icons/AddOutlined";
import Minus from "@material-ui/icons/RemoveOutlined";
import IconStyles from "../../CSS/IconStyle.js";

const CartItems = (props) => {
  const classes = IconStyles();

  return (
    <div className="itemContainer">
      <div className="sec-1">
        <img src={props.img} alt="pet" />
      </div>
      <div className="sec-2">
        <p className="name"> {props.breed} </p>
        <p className="price">${props.price}</p>
      </div>

      <div className="sec-3">
        <p>${props.price}</p>
      </div>

      <div className="sec-4">
        {props.quantity === 1 ? (
          <Delete
            className={classes.deleteIcon}
            onClick={() => props.deleteHandler(props.id)}
          />
        ) : (
          <Minus
            className={classes.cartCompIcon}
            onClick={() =>
              props.quantity === 1
                ? props.deleteHandler(props.id)
                : props.decrement(props.id)
            }
          />
        )}
        <div className="value"> {props.quantity} </div>
        <Add
          className={classes.cartCompIcon}
          onClick={() => props.increment(props.id)}
        />
      </div>
    </div>
  );
};

export default CartItems;
