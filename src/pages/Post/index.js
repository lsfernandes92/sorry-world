import PostTemplate from "components/PostTemplate";
import "./Post.css"
import posts from "json/posts.json"
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown"
import NotFound from "pages/NotFound";
import PageTemplate from "components/PageTemplate";

const Post = () => {
  const params = useParams();

  const post = posts.find((post) => { return post.id === Number(params.id) })

  if (!post) {
    return <NotFound />
  }

  return(
    <PageTemplate>
      <PostTemplate
        coverImage={`/assets/posts/${post.id}/cover.png`}
        title={post.title}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>
            {post.text}
          </ReactMarkdown>
        </div>
      </PostTemplate>
    </PageTemplate>
  )
}

export default Post;