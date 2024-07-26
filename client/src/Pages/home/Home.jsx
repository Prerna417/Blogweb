import { useEffect, useState } from "react"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts" + search);
        const data = Array.isArray(res.data) ? res.data : [];
        console.log("Fetched posts data:", data);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]); // Ensure posts is an array
      }
    }
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="flex-col md:flex md:flex-row">
      <Posts posts={Array.isArray(posts) ? posts : []} />
        <Sidebar />
      </div>
    </>
  )
}