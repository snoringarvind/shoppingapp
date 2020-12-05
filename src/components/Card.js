import React from "react";
import { Link } from "react-router-dom";

const Card = ({ card, cart, setCart }) => {
  const addCartHandler = () => {
    const duplicate = cart.some((item, i) => {
      if (item.label === card.label) {
        let newArr = [...cart];
        newArr[i].quantity = Number(newArr[i].quantity) + 1;
        setCart(newArr);
      }
      return item.label === card.label;
    });

    if (!duplicate) {
      const cartItems = { ...card, quantity: 1 };
      setCart((prev) => [...prev, cartItems]);
    }
  };

  return (
    <div className="Card">
      <div className="images">
        <Link
          to={{
            pathname: `/shop${card.src}`,
            state: `${card.src}`,
          }}
        >
          <img src={card.src} alt={card.src} />
        </Link>
      </div>
      <div className="description">
        <div className="label">{card.label}</div>
        <div className="price">Rs. {card.price}</div>
        <div className="add-cart-button">
          <button
            type="button"
            onClick={addCartHandler}
            style={{ cursor: "pointer" }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
