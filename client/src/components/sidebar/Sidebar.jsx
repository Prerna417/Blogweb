import { useState, useEffect } from "react";
import "./sidebar.css"
import axios from "axios"
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("https://blogsphere-oe8h.onrender.com/api/categories");
            console.log("Fetched categories:", res.data);
            setCats(Array.isArray(res.data) ? res.data : []);
        };
        getCats();
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://images.unsplash.com/photo-1518602164578-cd0074062767?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="" />
                <p>
                Our platform is a vibrant community where passionate writers and curious readers come together. Here, you can create your own blog, share your unique stories, and connect with like-minded individuals. Whether you're a seasoned blogger or just starting out, our user-friendly interface makes it easy for everyone to express themselves.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                {Array.isArray(cats) ? (
                    cats.map((c) => (
                        <Link to={`/?cat=${c.name}`} className="link" key={c._id}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))
                ) : (
                    <li>Error: Categories data is not an array.</li>
                )}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
