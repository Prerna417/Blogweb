import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./topbar.css"
import { context } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Topbar() {
    const { user, dispatch } = useContext(context);
    const PF = "http://localhost:5000/images/";
    const [inputVal, setInputVal] = useState("");
    const navigate = useNavigate();
    const [menu, setMenu] = useState(false);

    const handleLogout = () => {
        try {
            dispatch({ type: "LOGOUT" })
        } catch (err) {
            console.log(err);
        }
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            navigate(`/?user=${inputVal}`)
            setInputVal("");
        }
    };
    return (
        <div>
            <div className='hidden md:flex md:flex-row'>
                <div className="top">
                    <div className="topLeft">
                        <i className="topIcon fa-brands fa-square-facebook"></i>
                        <i className="topIcon fa-brands fa-square-twitter"></i>
                        <i className="topIcon fa-brands fa-square-pinterest"></i>
                        <i className="topIcon fa-brands fa-square-instagram"></i>
                    </div>
                    <div className="topCenter">
                        <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                            <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
                            <li className="topListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
                            <li className="topListItem" onClick={handleLogout}>{user && "LOGOUT"}</li>
                            {user && (
                                <li className="topListItem"><Link className="link" to={`/?user=${user.username}`}>MY WRITINGS</Link></li>
                            )}
                        </ul>
                    </div>
                    <div className="topRight">

                        {
                            user ? (
                                <Link to="/settings"> <img className="topImg" src={PF + user.profilePic} alt="" /></Link>
                            ) : (

                                <ul className="topList">
                                    <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                                    <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                                </ul>
                            )
                        }

                        <label htmlFor="searchUser"><i className="topSearchIcon fa-solid fa-magnifying-glass mt-2"></i></label>
                        <input type="text" id="searchUser" value={inputVal} onKeyDown={handleKeyPress} onChange={e => setInputVal(e.target.value)} className="border w-20 md:w-28 rounded-md border-black outline-none ml-2" />
                    </div>
                </div>
            </div>
            <div className="mt-7  p-2 md:hidden flex justify-between">
                <div className="ml-4 flex">
                    <i className="topIcon fa-brands fa-square-facebook"></i>
                    <i className="topIcon fa-brands fa-square-twitter"></i>
                    <i className="topIcon fa-brands fa-square-pinterest"></i>
                    <i className="topIcon fa-brands fa-square-instagram"></i>
                </div>
                <div className="md:hidden flex space-x-">
                    <div className="topRight">
                        {
                            user ? (
                                <Link to="/settings"> <img className="topImg mr-3" src={PF + user.profilePic} alt="" /></Link>
                            ) : (

                                <ul className="topList">
                                    <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                                    <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                                </ul>
                            )
                        }

                        <label htmlFor="searchUser"><i className=" fa-solid fa-magnifying-glass mt-2"></i></label>
                        <input type="text" id="searchUser" value={inputVal} onKeyDown={handleKeyPress} onChange={e => setInputVal(e.target.value)} className="border w-20 md:w-28  rounded-md border-black outline-none ml-2" />
                    </div>

                    <button
                        className="text-black  "
                        onClick={() => setMenu(!menu)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className={`z-20 ${menu ? 'block' : 'hidden'}`}>
                        {menu && (
                            <ul className='w-32 flex flex-col basis-full absolute top-20 right-0 bg-gray-700 space-y-3 rounded-sm text-center text-white' >
                                <li className="" onClick={() => setMenu(!menu)}><Link className="link" to="/">HOME</Link></li>
                                <li className="" onClick={() => setMenu(!menu)}><Link className="link" to="/about">ABOUT</Link></li>
                                <li className="" onClick={() => setMenu(!menu)}><Link className="link" to="/contact">CONTACT</Link></li>
                                <li className="" onClick={() => setMenu(!menu)}><Link className="link" to="/write">WRITE</Link></li>
                                <li className="cursor-pointer" onClick={()=>{handleLogout(); setMenu(!menu)}}>{user && "LOGOUT"}</li>
                                {user && (
                                    <li className="topListItem" onClick={() => setMenu(!menu)}><Link className="link" to={`/?user=${user.username}`}>MY WRITINGS</Link></li>
                                )}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
