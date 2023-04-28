import { useEffect, useState } from "react";

import {
  BannerName,
  CartItem,
  DebitCard,
  Header,
  ItemCard,
  MenuCard,
  MenuContainer,
  SubMenuContainer,
} from "./components";
import { MenuItems, Items } from "./components/data/data";

import "./App.css";
import {
  AccountBalanceRounded,
  Chat,
  Favorite,
  HomeRounded,
  Settings,
  SummarizeRounded,
} from "@mui/icons-material";
import { useStateValue } from "./components/provider/stateProvider";

const App = () => {
  const [isMainData, setMainData] = useState(
    Items.filter((elem) => elem.itemId === "buger01")
  );
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // Menu card active toggle
    const menuCard = document.querySelectorAll(".row_container .row_menu_card");

    function setMenuCardActive() {
      menuCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCard.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData, cart]);

  const setData = (itemId) => {
    setMainData(Items.filter((elem) => elem.itemId === itemId));
  };

  return (
    <div className="app">
      {/* Header Section  */}
      <Header />

      {/* Main Container  */}
      <main>
        <div className="main_container">
          <div className="banner">
            <BannerName name={"Vetri"} discount={"20"} link={"#"} />
            <img
              className="delivery_img"
              src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fdelivery.png?alt=media&token=69b9823d-96df-452a-bd4e-14d27a4cc337"
              alt="banner"
            />
          </div>

          <div className="dish_container">
            <SubMenuContainer name={"Menu Category"} />
            <div className="row_container">
              {MenuItems &&
                MenuItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <MenuCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="dish_item_container">
              {isMainData &&
                isMainData.map((data) => (
                  <ItemCard
                    key={data.id}
                    itemId={data.id}
                    imgSrc={data.imgSrc}
                    name={data.name}
                    ratings={data.ratings}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="right_menu">
          <div className="debit_card_container">
            <div className="debit_card">
              <DebitCard />
            </div>
          </div>

          {!cart ? (
            <div></div>
          ) : (
            <div className="cart_checkout_container">
              <div className="cart_container">
                <SubMenuContainer name={"Carts Items"} />

                <div className="cart_items">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>

              <div className="total_section">
                <h3>Total</h3>
                <p>
                  <span>$ </span>45.0
                </p>
              </div>
              <button className="check_out">Check out</button>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Menu  */}

      <div className="bottom_menu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeRounded />} isHome />
          <MenuContainer link={"#"} icon={<Chat />} />
          <MenuContainer link={"#"} icon={<AccountBalanceRounded />} />
          <MenuContainer link={"#"} icon={<Favorite />} />
          <MenuContainer link={"#"} icon={<SummarizeRounded />} />
          <MenuContainer link={"#"} icon={<Settings />} />

          <div className="indicator"></div>
        </ul>
      </div>
    </div>
  );
};

export default App;
