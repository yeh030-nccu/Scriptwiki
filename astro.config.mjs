import { defineConfig } from 'astro/config';

const configuredBase = (process.env.BASE_PATH ?? '').replace(/^\/+|\/+$/g, '');
const base = configuredBase ? `/${configuredBase}/` : '/';

export default defineConfig({
  output: 'static',
  trailingSlash: 'always',
  base,
});
