import { useState, useEffect } from "react";

import { Items } from "../data/data";
import { useStateValue } from "../provider/stateProvider";

import "./item-card.css";
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import { actionType } from "../reducer/reducer";

let cartData = [];

const ItemCard = ({ imgSrc, name, ratings, price, itemId }) => {
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const [isCart, setCart] = useState(null);
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  return (
    <div className="item_card" id={itemId}>
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setIsFavourite(!isFavourite)}
      >
        <Favorite />
      </div>

      <div className="img_box">
        <img src={imgSrc} alt={name} className="item_img" />
      </div>

      <div className="item_content">
        <h3 className="item_name">{name}</h3>
        <div className="bottom">
          <div className="ratings">
            {Array.apply(null, { length: 5 }).map((e, ind) => (
              <i
                key={ind}
                className={`rating ${currentValue > ind ? "orange" : "gray"}`}
                onClick={() => handleClick(ind + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              {" "}
              <span>$ </span> {price}
            </h3>
          </div>
          <i
            className="add_to_cart"
            onClick={() => setCart(Items.find((n) => n.id === itemId))}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
