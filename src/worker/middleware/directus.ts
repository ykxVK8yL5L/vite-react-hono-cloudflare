import type { MiddlewareHandler } from 'hono';
import { createDirectusClient } from '../lib/directus';

type Bindings = {
    DIRECTUS_URL: string;
    DIRECTUS_ADMIN_TOKEN: string;
};

export const directusMiddleware: MiddlewareHandler<{
  Bindings: Bindings;
}> = async (c, next) => {
  if (!c.env.DIRECTUS_URL||!c.env.DIRECTUS_ADMIN_TOKEN) {
    return c.json({ message: '请设置Directus配置信息：URL和Token!!' }, 401);
  }
  const directus = createDirectusClient(
    c.env.DIRECTUS_URL,
    c.env.DIRECTUS_ADMIN_TOKEN,
  );
  c.set('directus', directus);
  await next();
};
