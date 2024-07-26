
import Post from "../post/Post"
import "./posts.css"


export default function Posts({ posts }) {
  console.log("Posts prop:", posts);
  if (!Array.isArray(posts)) {
    console.error("Posts is not an array");
    return null;
  }
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p} key={p._id}/>
      ))}

    </div>
  );
}
