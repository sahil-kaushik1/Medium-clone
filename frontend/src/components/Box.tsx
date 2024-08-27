import { ChangeEvent } from "react";
interface label{
    title:string,
    placehold:string,
    onchange:(event: ChangeEvent<HTMLInputElement>) => void;
}
export const Box=({ title, placehold, onchange }:label)=>{
    return(
        <div className="my-5">
            <div className="text-lg font-bold my-2">
                {title}
            </div>
            <input type="text" placeholder={placehold} className="border-2 border-slate-400 w-full p-2 rounded-lg" onChange={onchange} />
        </div>
    )
}