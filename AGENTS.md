# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js App Router frontend. Route entry points live in `app/`; `app/layout.tsx` defines global HTML, fonts, and metadata, while `app/page.tsx` is the current home page. Global styles and Tailwind CSS v4 setup are in `app/globals.css`. Static assets belong in `public/` and are referenced from the app as root paths such as `/next.svg`. Project-level configuration is kept at the root: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`.

## Build, Test, and Development Commands

Use the package scripts in `package.json`:

- `yarn dev` starts the Next.js development server, usually at `http://localhost:3000`.
- `yarn build` creates a production build and runs framework type/build checks.
- `yarn start` serves the production build after `yarn build`.
- `yarn lint` runs ESLint with the Next.js Core Web Vitals and TypeScript rules.

The repository has a `yarn.lock`; prefer Yarn for dependency changes to avoid lockfile churn.

## Coding Style & Naming Conventions

Write TypeScript and React function components. Use `.tsx` for components/routes and `.ts` for non-JSX modules. Keep component names in PascalCase, hooks in `useCamelCase`, and local variables/functions in camelCase. Follow the existing two-space indentation, double quotes, and semicolon style. Prefer the `@/*` path alias from `tsconfig.json` for stable root-relative imports when files move beyond the current small structure. Use Tailwind utility classes for styling and keep shared design tokens in `app/globals.css`.

## Testing Guidelines

No test framework is currently configured. For now, run `yarn lint` and `yarn build` before opening a PR. When adding tests, colocate them near the code they cover using names like `Component.test.tsx` or create a top-level `tests/` directory if integration coverage grows. Prefer React Testing Library for UI behavior and Playwright for browser-level flows.

## Commit & Pull Request Guidelines

This repository has no existing commit history, so use clear, imperative commit subjects such as `Add book list page` or `Fix metadata title`. Keep commits focused and avoid mixing formatting-only changes with feature work. Pull requests should include a short description, validation steps (`yarn lint`, `yarn build`), linked issues when available, and screenshots or screen recordings for visible UI changes.

## Security & Configuration Tips

Do not commit secrets or local environment files. Keep public, browser-safe assets in `public/`; anything sensitive must remain server-side or in deployment-managed environment variables.
