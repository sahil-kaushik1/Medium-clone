

function Avatar({ name }: { name: string }) {
    return (
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {name.toUpperCase()}
        </span>
      </div>
    );
  }
  interface Blog {
    title: string;
    content: string;
    date:string,
    author: {
      name: string;
    };
  }
  
export const Blogbox=(label:Blog)=>{
    return (
        <div className="border-b-2 pb-5 my-10 ">
            <div className="flex">
               < Avatar name={label.author.name[0]}/>
               <div className="flex flex-col justify-center text-2xl px-2">
                {label.author.name}
               </div>
               <div className="flex flex-col justify-center text-sm  text-slate-500 ">
                {label.date.slice(0,10)}
               </div>
            </div>
            <div className="text-4xl py-2 font-bold">
                {label.title}
            </div>
            <div>
                {label.content}
            </div>
        </div>
    )
}