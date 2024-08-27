import { Hono } from 'hono'
import router_acc from './routes/account/account';
import blog from './routes/user/blog/blog';
import { cors } from 'hono/cors';
const app = new Hono()
app.use(cors())
app.route("/account",router_acc);
app.route("/user",blog);


export default app;
