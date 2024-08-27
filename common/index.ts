
import { z } from "zod";
export const signupbody=z.object({
"email":z.string().email(),
"password":z.string(),
"name":z.string()
});
export const signinbody=z.object({
    "email":z.string().email(),
    "password":z.string()
    });
export const blogbody=z.object({
        "title":z.string(),
        "content":z.string()
        });

type SignupBody = z.infer<typeof signupbody>;
type SigninBody = z.infer<typeof signinbody>;
type BlogBody = z.infer<typeof blogbody>;
export type {
    SignupBody,
    SigninBody,
    BlogBody
  };
  