import { Hono } from "hono";
import { readItems } from '@directus/sdk';
import type { createDirectusClient } from './lib/directus';
import { directusMiddleware } from './middleware/directus'

type Bindings = {
  BEARER_TOKEN: string;
};


declare module 'hono' {
  interface ContextVariableMap {
    directus: ReturnType<typeof createDirectusClient>;
  }
}

const app = new Hono<{ Bindings: Bindings }>();
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));
app.get("/api/user", (c) => c.json({ name: "test user query" }));
app.post("/api/login", (c) => c.json({ name: "Cloudflare", token: "dummy-token" }));

//Directus使用示例
app.get("/api/users", directusMiddleware, async (c) => {
  const directus = c.get('directus');
  const someVideos = await directus.request(
    readItems('user', {
      limit: 3
    })
  );
  console.log(someVideos);
  return c.json({ name: "test user query" })
});

export default app;
