import styles from "./PostTemplate.module.css"

const PostTemplate = ({ coverImage, title, children }) => {
  return(
    <article className={styles.postTemplateContainer}>
      <div 
        className={styles.coverImage}
        style={{ backgroundImage: `url(${coverImage})` }}
      >
      </div>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.postContentContainer}>
        {children}
      </div>
    </article>
  )
}

export default PostTemplate;