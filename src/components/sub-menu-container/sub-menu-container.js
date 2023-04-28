import { ChevronRightRounded } from "@mui/icons-material";
import "./sub-menu-container.css";

const SubMenuContainer = ({ name }) => {
  return (
    <div className="sub_menu_container">
      <h3>{name}</h3>
      <div className="view_all">
        <p>View all</p>
        <i>
          <ChevronRightRounded />
        </i>
      </div>
    </div>
  );
};

export default SubMenuContainer;
