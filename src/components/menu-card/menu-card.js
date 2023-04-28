import { ChevronRightRounded } from "@mui/icons-material";
import "./menu-card.css";

const MenuCard = ({ imgSrc, name, isActive }) => {
  return (
    <div className={`${isActive ? "active" : ""} row_menu_card`}>
      <div className="img_box">
        <img src={imgSrc} alt={name} />
      </div>
      <h3>{name}</h3>
      <i className="load_menu">
        <ChevronRightRounded />
      </i>
    </div>
  );
};

export default MenuCard;
