import { Hono } from "hono";
import { Context, use } from "hono/jsx";
// import {authmiddleware} from "../../auth/auth";
// import prisma from "../../../db/db";
import {signinbody} from "../../../../../common/index"
import { sign } from "hono/jwt";
import { Bindings } from "hono/types";
import createPrismaClient from "../../../db/db";
import { cors } from "hono/cors";
interface Env{
    DATABASE_URL:string
    Jwt_Secret:string
}
const router_signin=new Hono<{Bindings:Env}>();
// router_signup.use(authmiddleware);
router_signin.use(cors());
router_signin.post("",async (c)=>{
    const body=await c.req.json();
    const success=signinbody.safeParse(body);
    if(!success){
        return c.json({
            msg:"invalid credentials"
        })
    }
    try{
        const prisma=createPrismaClient(c.env.DATABASE_URL);
        const user=await prisma.user.findUnique({
        where:{
            email:body.email,
            password:body.password
        }
    }) 

    if(!user){
        return c.json({
            msg: "No account found with the provided email",
        });
    }
    const token=await sign({id:user.id}, c.env.Jwt_Secret as string)
    return c.json({
        token:token
    })
}catch(err){
    return c.json({
        msg:"No account found",
        error:err
    });
}
    
   
    
    
});
export default router_signin;