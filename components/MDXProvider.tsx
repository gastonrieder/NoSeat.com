import { MDXProvider } from '@mdx-js/react'
import { Figure } from './Figure'
import { ReactNode } from 'react'

const components = {
  Figure,
}

export function MDXContent({ children }: { children: ReactNode }) {
  return (
    <MDXProvider components={components}>
      {children}
    </MDXProvider>
  )
}
