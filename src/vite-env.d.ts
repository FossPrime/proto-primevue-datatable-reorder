/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// https://unpkg.com/browse/primevue@3.18.0/config/package.json
// import PrimeVue from 'primevue/config' // Not working in PrimeVue@3.18.0
declare module 'primevue/config' {
  import type plugin from 'primevue/config/PrimeVue.d.ts'
  const PrimeVue: plugin
  export const { default: PrimeVue } // the incorrect way it's actually importing, hacked to work by allowSyntheticDefaultImports
  export default PrimeVue // the correct way that is not used in code, but used in the definition...
}

declare module 'primevue/usetoast/usetoast.esm.js' {
  import { ToastServiceMethods } from 'primevue/toastservice/ToastService.d.ts'
  export const useToast: ToastServiceMethods // This has no default exports, makes things easier!
}
