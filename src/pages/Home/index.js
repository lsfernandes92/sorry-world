import styles from "pages/Home/Home.module.css"
import posts from "json/posts.json"
import Post from "components/PostCard";

const Home = () => {
  return(
    <main>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home