import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"], //
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"], // 'lcov' genera la carpeta 'coverage/' con los reportes para SonarQube
    },
  },
});