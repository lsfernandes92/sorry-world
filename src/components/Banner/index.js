import styles from "./Banner.module.css"
import coloredCircle from "../../assets/colored_circle.png"
import myPhoto from "../../assets/my_photo.png"

const Banner = () => {
  return(
    <div className={styles.banner}>
      <div className={styles.apresentation}>
        <h1 className={styles.title}>
          Sorry world!
        </h1>

        <p className={styles.paragraph}>
          Welcome to my personal space! I am Lucas Fernandes, a Back-end
          developer with 5 years of web development experience specializing in
          Ruby on Rails, API development, and SaaS products. Here, I share a lot
          of knowledge, and I hope you learn something new :)
        </p>
      </div>

      <div className={styles.images}>
        <img 
          className={styles.coloredCircle}
          src={coloredCircle}
          alt="Colored circle"
          aria-hidden={true}
        />

        <img 
          className={styles.myPhoto}  
          src={myPhoto}
          alt="Lucas profile"
        />
      </div>
    </div>
  )
}

export default Banner;