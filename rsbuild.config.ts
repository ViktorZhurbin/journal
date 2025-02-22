import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  html: {
    template: "./index.html",
  },
  source: {
    entry: {
      index: "./src/main.tsx",
    },
  },

  plugins: [pluginReact()],

  performance: process.env.BUNDLE_ANALYZE
    ? {
        bundleAnalyze: {
          analyzerMode: "static",
          openAnalyzer: true,
        },
      }
    : {},
});
