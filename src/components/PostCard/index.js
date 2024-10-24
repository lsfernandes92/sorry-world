import ButtonMain from "components/ButtonMain";
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

        <ButtonMain>Read</ButtonMain>
      </div>
    </Link>
  )
}

export default PostCard;