import styles from "components/Post/Post.module.css"

const Post = ({ post }) => {
  return(
    <div className={styles.post}>
      <img
        className={styles.cover}
        alt="Post cover"
        src={`assets/posts/${post.id}/cover.png`}
      />

      <h2 className={styles.title}>{post.title}</h2>

      <button className={styles.buttonRead}>Read</button>
    </div>
  )
}

export default Post;