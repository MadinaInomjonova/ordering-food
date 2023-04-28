import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import { useStateValue } from "../provider/stateProvider";
import { actionType } from "../reducer/reducer";
import "./cart-item.css";

let cartItems = [];

const CartItem = ({ imgSrc, name, price, itemId }) => {
  const [qty, setQty] = useState(1);
  const [{ cart }, dispatch] = useStateValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [qty]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty === 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      }
      setQty(qty - 1);
    }
  };

  return (
    <div className="cart_item">
      <div className="img_box">
        <img src={imgSrc} alt={name} />
      </div>

      <div className="item_section">
        <h2 className="item_name">{name}</h2>
        <div className="item_quantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="item_remove"
              onClick={() => updateQuantity("remove", itemId)}
            />

            <AddRounded
              className="item_add"
              onClick={() => updateQuantity("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="item_price">
        <span className="dollorSign">$</span>
        <span className="item_price_value">{itemPrice}</span>
      </p>
    </div>
  );
};

export default CartItem;
