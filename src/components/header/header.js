import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import "./header.css";

const Header = () => {
  return (
    <header>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Flogo.png?alt=media&token=fc228623-ef27-4af4-8ea5-b9ebeeaf47dc"
        alt="logo"
        className="logo"
      />

      <div className="input_box">
        <SearchRounded className="search_icon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shopping_cart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p>2</p>
        </div>
      </div>

      <div className="profile_container">
        <div className="img_box">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fprofile.jpg?alt=media&token=36821495-39b9-4145-bde3-16c47c6ff937"
            alt=""
          />
        </div>

        <h2 className="username">Madina</h2>
      </div>

      <div
        className="toggle_menu"
        onClick={() => {
          document.querySelector(".right_menu").classList.toggle("active");
        }}
      >
        <BarChart className="toggle_icon" />
      </div>
    </header>
  );
};

export default Header;
