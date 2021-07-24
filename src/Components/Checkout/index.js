import React, { useCallback } from "react";
import "../../CSS/Checkout.css";
import CartItems from "./CartItems";
import { useCart } from "../../misc/custom-hooks";

const calPrice = (items) => {
  return items.reduce((result, item) => {
    return (result += item.price);
  }, 0);
};

function Checkout() {
  const [items, dispatchCart] = useCart();

  console.log(items);
  const deleteItems = useCallback((id) => {
    dispatchCart({ type: "DELETE", id: id });
  }, []);

  const increment = (id) => {
    dispatchCart({ type: "INCREMENT", id: id });
  };

  const decrement = (id) => {
    dispatchCart({ type: "DECREMENT", id: id });
  };

  const tolItems = CartItems.length;
  if (items === undefined || items.length === 0) {
    return <p className="msg">No Items</p>;
  }

  return (
    <>
      <div className="top">
        <div className="heading">
          <p>Shopping Cart</p>
        </div>
        {items.map((item) => {
          return (
            <CartItems
              key={item.id}
              id={item.id}
              deleteHandler={deleteItems}
              breed={item.breed}
              price={item.price}
              tolItems={tolItems}
              img={item.img}
              quantity={item.quantity}
              increment={increment}
              decrement={decrement}
            />
          );
        })}
      </div>
      <div className="total">
        <p className="amt">${calPrice(items)}</p>
        <p className="head">Total</p>
      </div>
    </>
  );
}

export default Checkout;
