import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({
    // Options are passed directly to `@netlify/plugin-functions-core`
    edgeMiddleware: true,
  }),
});
