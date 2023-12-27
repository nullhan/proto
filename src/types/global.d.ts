export {}
declare global {
  const dayjs: typeof import('dayjs')
  const lodash: typeof import('lodash-es')
}
declare module 'vue-router' {
  interface RouteMeta {
    activeMenu?: string
  }
  // export * from 'vue-router/dist/vue-router.d.ts'
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.js' {
  export default any
}

