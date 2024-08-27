import { Hono } from "hono";
import router_signup from "./signup/signup";
import router_signin from "./signin/signin";
import { cors } from "hono/cors";

const router_acc=new Hono();
router_acc.use(cors())
router_acc.route("/signup",router_signup);
router_acc.route("/signin",router_signin);
export default router_acc;