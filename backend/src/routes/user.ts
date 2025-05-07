import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import {decode,sign,verify} from "hono/jwt"
import { singinInput, singupInput } from '@naveenreddy7252/medium-common';









export const userRouter = new Hono<{
	Bindings: {
    JWT_SECRET: string;
		DATABASE_URL: string
	},
  Variables:{
    headers:string
    userId:string
  }
}>();



userRouter.post('/signup', async(c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body=await c.req.json();

    const response=singupInput.safeParse(body);
    if(!response.success)
    {
      c.status(411)
      return c.json({
        message:"Inputs not correct"
      })
    }
    const bodydata=response.data
try
{
const user=await prisma.user.create({
  data:{
    email:bodydata.email,
    password:bodydata.password,
    name:bodydata.name
  }

  

})

const token=await sign({id:user.id},c.env.JWT_SECRET)

return c.json({token})

}catch(err)
{
   c.status(403);
   return c.json({error:"error while authentication"})
}

  
})



userRouter.post('/signin', async(c) =>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())
  

  const body=await c.req.json();

  const parsed=singinInput.safeParse(body);

  if(!parsed.success)
  {
    c.status(411)
    return c.json({message:"INputs not correct"})
  }

  const anyuser=await prisma.user.findUnique({
    where:{
      email: parsed.data.email,
      password:parsed.data.password
    }

  });

  if(!anyuser)
  {
    c.status(403);
    return c.json({error:"user not found"})
  }

  const token=await sign({id:anyuser.id},c.env.JWT_SECRET)

  return c.json({token})


})