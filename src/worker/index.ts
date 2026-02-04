import { Hono } from "hono";

type Bindings = {
  BEARER_TOKEN: string;
};

const app = new Hono<{ Bindings: Bindings }>();
app.get("/api/", (c) => c.json({ name: "Cloudflare" }));
app.get("/api/user", (c) => c.json({ name: "test user query" }));
app.post("/api/login", (c) => c.json({ name: "Cloudflare", token: "dummy-token" }));
export default app;
