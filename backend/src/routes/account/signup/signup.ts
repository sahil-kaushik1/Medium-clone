import { Hono } from "hono";
import { Context, use } from "hono/jsx";
// import {authmiddleware} from "../../auth/auth";
import prisma from "../../../db/db";
import { sign } from "hono/jwt";
import { Bindings } from "hono/types";
import { signupbody } from "../../../../../common";
import createPrismaClient from "../../../db/db";
import { cors } from "hono/cors";
interface Env{
    DATABASE_URL:string
    Jwt_Secret:String
}
const router_signup=new Hono<{Bindings:Env}>();
// router_signup.use(authmiddleware);
router_signup.use(cors())
router_signup.post("",async (c)=>{
    const body=await c.req.json();
    const success=signupbody.safeParse(body);
    if(!success){
        return c.json({
            msg:"invalid credentials"
        })
    }
    const prisma=createPrismaClient(c.env.DATABASE_URL);
    const existuser=await prisma.user.findUnique({
        where:{
            email:body.email
        }
    })
    if(existuser)return c.json({
        msg:"Account exist with same the email provided"
    })
    const user=await prisma.user.create({
        data:{
            email:body.email,
            password:body.password,
            name:body.name
        }
    })
    const token=await sign({id:user.id}, c.env.Jwt_Secret as string)
    return c.json({
        token:token
    })
});
export default router_signup;