import styles from "./ButtonMain.module.css"

const ButtonMain = ({ children, size }) => {
  return(
    <button 
      className={`${styles.buttonMain} ${styles[size]}`}
    >
      {children}
    </button>
  )
}

export default ButtonMain;