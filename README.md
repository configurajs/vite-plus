# @configurajs/vite-plus

[中文文档](./README.zh-CN.md)

Opinionated [Oxlint](https://oxc.rs/docs/guide/usage/linter) + [Oxfmt](https://oxc.rs/docs/guide/usage/formatter) configuration preset for [Vite+](https://viteplus.dev) projects.

## Features

- TypeScript (enabled by default)
- Vue 3 (enabled by default)
- React (opt-in)
- Vitest (enabled by default)
- Type-aware linting
- Oxfmt formatting with import sorting and Tailwind CSS class sorting

## Install

```bash
pnpm add -D @configurajs/vite-plus
```

## Usage

### Oxc Configuration File

Create `oxlint.config.ts` in your project root:

```ts
// oxlint.config.ts
import { lint } from '@configurajs/vite-plus'

export default lint()
```

Create `oxfmt.config.ts` in your project root:

```ts
// oxfmt.config.ts
import { fmt } from '@configurajs/vite-plus'

export default fmt()
```

### Vite+ Configuration File

If you are using [Vite+](https://viteplus.dev), you can configure lint and fmt in `vite.config.ts` directly:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { lint, fmt } from '@configurajs/vite-plus'

export default defineConfig({
  lint: lint(),
  fmt: fmt(),
})
```

> **Note:** The Oxc VSCode extension currently cannot recognize the Vite+ configuration file (`vite.config.ts`) for linting. Use standalone `oxlint.config.ts` / `oxfmt.config.ts` files if you need VSCode integration, or wait for the official fix.

### Lint Options

```ts
lint({
  // Enable TypeScript support (default: true)
  ts: true,
  // Enable Vue support, version 3 by default (default: true)
  vue: true, // or { version: 2 }
  // Enable React support (default: false)
  react: false,
  // Enable Vitest support (default: true)
  vitest: true,
  // Custom rules
  rules: {
    'no-console': 'error',
  },
  // Additional overrides
  overrides: [
    {
      files: ['scripts/**'],
      rules: { 'no-console': 'off' },
    },
  ],
})
```

### VSCode Settings

Add the following to `.vscode/settings.json`:

```jsonc
{
  "prettier.enable": false,
  "eslint.enable": false,
  "editor.defaultFormatter": "oxc.oxc-vscode",
}
```

## License

MIT
