import ButtonMain from "components/ButtonMain";
import styles from "./NotFound.module.css"
import notFoundImage from "assets/erro_404.png"
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return(
    <>
      <div className={styles.containerContent}>
        <span className={styles.text404}>404</span>

        <h1 className={styles.title}>Ops! Página não encontrada.</h1>

        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando?
        </p>

        <p className={styles.paragraph}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div className={styles.backButton} onClick={() => navigate(-1)}>
          <ButtonMain size="lg">Back</ButtonMain>
        </div>
        
        <img
          className={styles.dogImage}
          src={notFoundImage}
          alt="Dog wearing glasses in front of the PC"
        />
      </div>
      <div className={styles.emptySpace}></div>
    </>
  )
}

export default NotFound;