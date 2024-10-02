import MenuLink from "../MenuLink";
import styles from "./Menu.module.css"

const Menu = () => {
  return(
    <header>
      <nav className={styles.navigation}>
        <MenuLink to="/" >Home</MenuLink>
        <MenuLink to="/about" >About</MenuLink>
      </nav>
    </header>
  );
}

export default Menu;