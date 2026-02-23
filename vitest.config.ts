import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["test/Schema.test.ts", "test/StateView.test.ts"],
    setupFiles: [],
  }
});
