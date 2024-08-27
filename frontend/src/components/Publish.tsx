import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate=useNavigate();
    const post=async ()=>{
        await axios.post("https://backend.sahilkaushik2444.workers.dev/user/blog",{
            title:title,
            content:content
        },
        {headers:{
            authorization:`${localStorage.getItem("token")}`
        }

        })
        navigate("/blog");
    }
    return (<div className="max-h-screen">
        
        <div className="border-b-2 mb-20">
    <div className="flex justify-between p-5">
        <div className="text-2xl font-extrabold">
        Medium
        </div>
        <div>
            <button className="  "> Hi, user!</button>
        </div>
    </div>

</div>
        <div className="flex flex-col justify-center items-center   px-2">
            <div>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-5xl text-slate-600 mb-5 border-b-2 border-slate-300 py-4 focus:outline-none"
                />
            </div>

            <div className="w-full max-w-xl  rounded">
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="text-xl text-slate-600 border-none focus:outline-none bg-slate-100 p-4 rounded w-full h-64"
                />
            </div>
            <div className="py-4">
                <button className="bg-blue-400 text-2xl px-4 py-2 rounded-lg border-2 border-slate-900" onClick={post}>Post</button>
            </div>
        </div>

        </div>    );
}
