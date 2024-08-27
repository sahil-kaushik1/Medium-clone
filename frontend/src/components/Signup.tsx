import { Quote } from "./Quote"
import { Head } from "./Head"
import { Box } from "./Box"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
// import {SignupBody} from "../../../common/index"
import { useState } from "react"
export  const Signup=()=>{
    const [inputs,setinputs]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate=useNavigate();
    const handlename=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setinputs({
            ...inputs,name:event.target.value
        })
    }
    const handleemail=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setinputs({
            ...inputs,email:event.target.value
        })
    }
    const handlepassowrd=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setinputs({
            ...inputs,password:event.target.value
        })
    }
    const handlesignup=async()=>{
        const responses=await axios.post("https://backend.sahilkaushik2444.workers.dev/account/signup",inputs);
        localStorage.setItem("token","Bearer "+responses.data.token);
        navigate("/blog")
    }
return(
    <div className="w-screen h-screen grid grid-cols-1 sm:grid-cols-2">
        <div  className="bg-white flex flex-col justify-center items-center">
            <div className="w-6/12">
            <div className="flex justify-center">
                 <Head title="Create an account"></Head>
            </div>
                
            <div className="text-slate-400 flex justify-center my-2 ">
                Already have an account. <Link to={"/signin"} className="underline"> Login</Link>
            </div>
            <Box title="Name"  placehold="Alex.."  onchange={handlename}/>
            <Box title="Email" placehold="Alex@gmail.com" onchange={handleemail}></Box>
            <Box title="Password" placehold="1234" onchange={handlepassowrd}></Box>

            <button className="flex justify-center w-full border-2 text-white bg-slate-900 rounded-xl p-2 mt-4" onClick={handlesignup} >Submit</button>
            </div>
           
        </div>
        <div className="bg-slate-200 flex flex-col justify-center items-center "  >
            <Quote></Quote>
        </div>

    </div>
)
}