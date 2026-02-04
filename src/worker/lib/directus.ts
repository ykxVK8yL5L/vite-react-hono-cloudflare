import { createDirectus, rest, authentication } from '@directus/sdk';

export function createDirectusClient(
  url: string,
  token?: string
) {
  const client = createDirectus(url)
    .with(rest())
    .with(authentication());

  if (token) {
    client.setToken(token);
  }

  return client;
}
