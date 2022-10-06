import Koa from 'koa';
import Router from '@koa/router';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser'

// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

const app = new Koa();
const router = new Router();

type User = {
  username: string
}
const users = [] as User[]

router.get('/users', async (ctx, next) => {
  ctx.body = users
});

router.post('/users', async ctx => {
  const user = {
    username: ctx.request.body?.username as string,
    name: ctx.request.body?.username as string,
    email: ctx.request.body?.username as string,
    password: ctx.request.body?.username as string,    
  }

  users.push(user)

  ctx.body = user
})

app.use(cors());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3333, () => console.log('Running in port 3333'));