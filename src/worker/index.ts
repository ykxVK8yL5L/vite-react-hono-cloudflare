import { Hono } from "hono";
import type { createDirectusClient } from './lib/directus';
import { apiRouter } from "./api/route";

declare module 'hono' {
  interface ContextVariableMap {
    directus: ReturnType<typeof createDirectusClient>;
  }
}

const app = new Hono();
app.route("/", apiRouter);
app.post("/login", (c) => c.json({ name: "Cloudflare", token: "testtoken" }));
app.get("/test", (c) => c.json({ name: "Cloudflare" }));

export default app;
