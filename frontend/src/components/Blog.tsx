import { useEffect, useState } from "react"
// import { BlogBody} from "../../../common";S
import { Blogbox } from "./blogbox";
import axios from "axios";
import { Appbar } from "./appbar";


interface Blog {
  id: string;
  title: string;
  content: string;
  date:string,
  published:string,
  authorid:string,
  author: {
    name: string;
  };
}

export const Blog=()=>{
    const [Blogs,setblog]=useState<Blog[]>([]);
    const [loading,setloading]=useState(true);
   async function getall(){
        const response=await axios.get("https://backend.sahilkaushik2444.workers.dev/user/bulk",{headers:{
          authorization : `${localStorage.getItem("token")}`
        }})
        const sortedBlogs = response.data.sort((a: Blog, b: Blog) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
    
        setblog(sortedBlogs);
        console.log("HI")
        setloading(false);
        
    }
    useEffect(()=>{
      getall();   
       },[])
       if (loading) {
        return (
          <div>
            <Appbar />
            <div className="flex justify-center items-center min-h-screen">
              <div className="w-full max-w-3xl px-4">
                {/* First Pulse Block */}
                <div role="status" className="max-w-3xl animate-pulse">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>
      
                {/* Second Pulse Block */}
                <div role="status" className="max-w-3xl animate-pulse my-20">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>
      
                {/* Third Pulse Block */}
                <div role="status" className="max-w-3xl animate-pulse my-20">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>

                <div role="status" className="max-w-3xl animate-pulse my-20">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        );
      }
      
   
    return(    <div>
      <Appbar></Appbar>
            <div className="flex justify-center min-h-screen " >
              
              <div className="max-w-3xl w-full  ">

             
                {Blogs.map((Blog)=>(
                    <div key={Blog.id}>
                        <Blogbox author={Blog.author} date={Blog.date} title={Blog.title} content={Blog.content}></Blogbox>
                    </div>
                ))}
            </div> 
            </div>    

    </div>

    )
}
