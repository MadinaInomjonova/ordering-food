import "./menu-container.css";

const MenuContainer = ({ icon, link, isHome }) => {
  return (
    <li className={isHome && "active"}>
      <a href={link}>
        <span>{icon}</span>
      </a>
    </li>
  );
};

export default MenuContainer;
