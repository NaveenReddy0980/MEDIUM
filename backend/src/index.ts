import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { cors } from 'hono/cors'




import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';



const app = new Hono<{
	Bindings: {
    JWT_SECRET: string;
		DATABASE_URL: string
	},
  Variables:{
    headers:string
    userId:string
  }
}>();

app.use('*',cors())



app.route("/api/v1/users",userRouter);
app.route("/api/v1/blog",blogRouter);






export default app
