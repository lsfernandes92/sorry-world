import styles from "components/PostCard/PostCard.module.css"
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return(
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.cover}
          alt="Post cover"
          src={`assets/posts/${post.id}/cover.png`}
        />

        <h2 className={styles.title}>{post.title}</h2>

        <button className={styles.buttonRead}>Read</button>
      </div>
    </Link>
  )
}

export default PostCard;