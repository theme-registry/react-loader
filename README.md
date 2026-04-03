# @theme-registry/react-loader

React loader strategy for `@theme-registry/toolkit`. Use it to generate registries that lazily load React components.

## Installation

```bash
npm install --save-dev @theme-registry/react-loader
```

## Usage

```ts
import { createReactLoader } from '@theme-registry/react-loader'
import { buildAllThemes } from '@theme-registry/toolkit'

await buildAllThemes({
  themesDir: './src/themes',
  loader: createReactLoader({ useSuspense: true })
})
```

### Options

| Option | Required | Default value | Description |
|--------|----------|----------------|-------------|
| `useSuspense` | No | `true` | When `true`, templates are registered using `React.lazy(() => import(...))`, which expects a surrounding `Suspense` fallback. Set to `false` to use `React.lazy(import(...))` instead. |
