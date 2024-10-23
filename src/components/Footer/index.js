import styles from "components/Footer/Footer.module.css"
import { ReactComponent as RegisteredTrademark } from 'assets/registered_trademark.svg'

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <RegisteredTrademark />

      Developed by Lucas Fernandes
    </footer>
  )
}

export default Footer;