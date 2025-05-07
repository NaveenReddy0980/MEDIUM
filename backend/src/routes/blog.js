import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@naveenreddy7252/medium-common";
export const blogRouter = new Hono();
blogRouter.use('/*', async (c, next) => {
    const headers = c.req.header("authorization") || " ";
    try {
        const user = await verify(headers, c.env.JWT_SECRET);
        if (user) {
            c.set("userId", user.id);
            await next();
        }
        else {
            c.status(403);
            return c.json({ error: "unauthorized" });
        }
    }
    catch (err) {
        c.status(403);
        return c.json({ error: "not logged in" });
    }
});
blogRouter.post('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const parsed = createBlogInput.safeParse(body);
    if (!parsed.success) {
        c.status(411);
        return c.json({ message: "INputs not correct" });
    }
    const authorId = c.get('userId');
    const newbody = parsed.data;
    try {
        const post = await prisma.post.create({
            data: {
                title: newbody.title,
                content: newbody.content,
                authorId: authorId
            }
        });
        return c.json({ id: post.id });
    }
    catch (err) {
        c.status(411);
        return c.json({ message: "error while posting the post" });
    }
});
blogRouter.put('/', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const parsed = updateBlogInput.safeParse(body);
    if (!parsed.success) {
        c.status(411);
        return c.json({ message: "INputs not correct" });
    }
    const newbody = parsed.data;
    try {
        const post = await prisma.post.update({
            where: {
                id: newbody.id
            },
            data: {
                title: newbody.title,
                content: newbody.content,
            }
        });
        return c.json({ id: post.id });
    }
    catch (err) {
        c.status(411);
        return c.json({ message: "error while updating the post" });
    }
});
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const posts = await prisma.post.findMany();
    return c.json({ posts });
});
blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id = c.req.param("id");
    try {
        const post = await prisma.post.findFirst({
            where: {
                id
            },
        });
        return c.json({ post });
    }
    catch (err) {
        c.status(411);
        return c.json({ message: "error while fetching the post" });
    }
});
// Todo:add pagination
