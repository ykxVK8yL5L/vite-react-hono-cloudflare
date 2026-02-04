import { Hono } from "hono";
import {generate} from 'otplib'

const otpRouter = new Hono().basePath("/otp");

// 定义一个 GET 路由，通过路径参数传递 secret
otpRouter.get('/generate-otp/:secret', async (c) => {
  const { secret } = c.req.param();
  if (!secret) {
    return c.json({ error: 'Missing secret' }, 400);
  }
  // 通过 otplib 计算 OTP
  const otp = await generate({secret});
  return c.json({ otp });
});


export { otpRouter };