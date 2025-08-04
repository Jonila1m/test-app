import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {} from "@testing-library/react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   test: {
//     server: {
//       sourcemap: false,
//     },
//   },
// });
// vitest.config.ts
// import { defineConfig } from "vitest/config";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [
//     react(),
//     {
//       name: "strip-sourcemap-comments",
//       enforce: "post",
//       apply: "serve",
//       transform(code, id) {
//         if (/\.[jt]sx?$/.test(id)) {
//           return code.replace(/\/\/# sourceMappingURL=.*\n?/g, "");
//         }
//       },
//     },
//   ],
//   build: { sourcemap: false },
// });
