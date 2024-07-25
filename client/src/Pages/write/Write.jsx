import { useState } from "react";
import { useContext } from "react";
import "./write.css"
import axios from "axios"
import { context } from "../../context/Context";

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [file, setFile] = useState(null);
    const { user } = useContext(context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc
        };
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                 await axios.post("/upload", data); 
            } catch (err) {
                console.log(err);
            }

        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {

        }

    }
    return (
        <div className="write">
            {file && (
                <img className=" ml-12 w-[60vw] h-[300px] md:ml-36 object-cover md:w-[60vw] md:h-[450px] rounded-[10px]" src={URL.createObjectURL(file)} alt="" />
            )}

            <form action="" className="writeForm" onSubmit={handleSubmit}>
                <div className="ml-12 md:ml-36 flex items-center">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                    <input type="text" placeholder="Title"
                        className="writeInput" autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="ml-12 md:ml-36 flex items-center">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit">publish</button>
            </form>
        </div>
    )
}
