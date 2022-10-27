import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

const routes = [
  {
    path: '/',
    name: 'app',
    component: App,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () =>
          import('./components/datatable/DataTableReorderDemo.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
