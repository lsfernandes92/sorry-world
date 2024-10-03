import { NavLink } from "react-router-dom";
import styles from "./MenuLink.module.css";

const MenuLink = ({ children, to }) => {
  return(
    <NavLink 
      to={to}
      className={({ isActive }) => isActive ? styles.linkHighlighted : ""}
    >
      {children}
    </NavLink>
  );
}

export default MenuLink;