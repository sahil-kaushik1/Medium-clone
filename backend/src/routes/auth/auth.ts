import { Context, Next } from "hono";
import { verify } from "hono/jwt";

export async function authmiddleware(c:Context,next:Next) {
const auth: string | undefined=c.req.header("authorization");
if(!auth || !(auth.startsWith("Bearer")))return c.json({msg:"Error in authentication"},401);
const token =auth.split(" ")[1];
try{
    const decode=await verify(token,c.env.Jwt_Secret);
    c.set("userId",decode.id);
    await next();
}catch(err){
    return c.json({msg:"Error"},401);
}
    
}