interface head{
    title:string
}
export const Head=(head:head)=>{
    return(
        <div className="text-4xl font-extrabold">
            {head.title}
        </div>
    )
}