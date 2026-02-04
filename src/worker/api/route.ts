import { Hono } from "hono";
import { readItems } from '@directus/sdk';
import { authMiddleware } from "../middleware/auth";
import { directusMiddleware } from '../middleware/directus'
import { otpRouter } from './opt'

const apiRouter = new Hono().basePath("/api");
apiRouter.use(authMiddleware)
apiRouter.use(directusMiddleware)
apiRouter.route('/', otpRouter)

apiRouter.get("/user", (c) => c.json({ name: "Cloudflare" }));
apiRouter.get("/users", authMiddleware, directusMiddleware, async (c) => {
  const directus = c.get('directus');

  try {
    const someVideos = await directus.request(
      readItems('users', {
        limit: 3
      })
    );
    console.log(someVideos);
    return c.json({ name: "test user query" })
  } catch (error: any) {
    // 捕获错误并提示
    console.error('请求失败:', error.message);
    return c.json({ name: error.message }, 500)
  }

});


export { apiRouter };