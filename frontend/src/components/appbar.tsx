import { useNavigate } from "react-router-dom"

export  const   Appbar=()=>{
const navigate=useNavigate();
    return(

<div className="border-b-2 mb-10">
    <div className="flex justify-between p-5">
        <div className="text-2xl font-extrabold">
        Medium
        </div>
        <div>
            <button className="bg-blue-400 rounded-lg p-2 border-2 border-slate-900 " onClick={()=>navigate("/publish")}> Publish a blog</button>
        </div>
    </div>

</div>
)
}