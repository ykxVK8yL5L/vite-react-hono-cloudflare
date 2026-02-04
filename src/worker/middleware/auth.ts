import type { MiddlewareHandler } from 'hono';
import { bearerAuth } from "hono/bearer-auth";

type Bindings = {
    BEARER_TOKEN: string;
};

export const authMiddleware: MiddlewareHandler<{
  Bindings: Bindings;
}> = async (c, next) => {
 const token = c.env.BEARER_TOKEN;
 const auth = bearerAuth({
    token,
    noAuthenticationHeaderMessage: {
      status: 401,
      message: "no bearer token",
    },
    invalidAuthenticationHeaderMessage: {
      status: 401,
      message: "invalid auth",
    },
    invalidTokenMessage: {
      status: 401,
      message: "invalid bearer token",
    },
  });
  return auth(c, next);
};
