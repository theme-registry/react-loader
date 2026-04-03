export interface ReactLoaderOptions {
  useSuspense?: boolean
}

import type { LoaderStrategy, TemplateRegistryEntry } from '@theme-registry/toolkit'

export function createReactLoader (options: ReactLoaderOptions = {}): LoaderStrategy {
  const { useSuspense = true } = options

  return {
    name: 'react-loader',
    getHeaderLines: () => [
      'import { lazy } from "react";'
    ],
    createTemplateRegistration: (entry: TemplateRegistryEntry) => {
      const loader = useSuspense
        ? `lazy(() => import("./${entry.relativePath}"))`
        : `lazy(import("./${entry.relativePath}"))`
      const contextArg = entry.includeContext ? `, "${entry.context}"` : ''
      return `registry.set("${entry.template}", ${loader}${contextArg});`
    },
    getSupportedExtensions: () => ['.js', '.jsx', '.ts', '.tsx']
  }
}

export const reactLoader = createReactLoader()
export default reactLoader
