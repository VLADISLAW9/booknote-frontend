import { eslint } from "@siberiacancode/eslint";

export default eslint({
  typescript: true,
  react: true,
  nextjs: true,
}, {
  ignores: ["**/*.css"],
});
