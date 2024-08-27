import { Hono } from "hono";
import { authmiddleware } from "../../auth/auth";
import { Context } from "hono/jsx";
import prisma from "../../../db/db";
import createPrismaClient from "../../../db/db";
import { blogbody } from "../../../../../common";
import { cors } from "hono/cors";
const blog=new Hono<{Bindings:{
DATABASE_URL:string
},
    Variables:{userId:string}
}>();
blog.use(cors())
blog.use(authmiddleware)
blog.post("/blog",async (c)=>{
    const body=await c.req.json();
    const success=blogbody.safeParse(body);
    if(!success){
        return c.json({
            msg:"invalid credentials"
        })
    }
    const userid=await c.get("userId");
    try{
        const prisma=createPrismaClient(c.env.DATABASE_URL);
        const post=await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:userid
            }
        })
        return c.json({
            id:post.id
        })    
    }catch(err){
            return c.json({msg:"error while posting"})
        }
});

blog.put("/put",async (c)=>{
    const body=await c.req.json();
    const userid=await c.get("userId");
    try{
        const prisma=createPrismaClient(c.env.DATABASE_URL);
       await prisma.post.update({
        where:{
           id:body.id
        },
        data:{
            title:body.title,
            content:body.content
        }
       })
       return c.json({
        msg:"updated succesfully"
       })
    }catch(err){
        return c.json({
           msg:"Error while updating"
        })
    }
});
blog.get("/get",async (c)=>{
    const body=await c.req.json();
    const userid=await c.get("userId");
  try{
    const prisma=createPrismaClient(c.env.DATABASE_URL);  
    const post = await prisma.post.findUnique({
		where: {
			id:body.id
		}
	});

	return c.json(post);}catch(er){
        return  c.json({
            msg:"Error"
        })
    }
});
blog.get('/bulk', async (c) => {
    const prisma=createPrismaClient(c.env.DATABASE_URL);
	const posts = await prisma.post.findMany({
        include:
        {
            author:{
                select:{
                    name:true
                }
            }
        }
    });
	return c.json(posts);
})
export default blog;