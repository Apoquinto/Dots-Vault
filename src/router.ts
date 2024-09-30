import { createMemoryHistory, createRouter } from 'vue-router'

import MainMenu from './modules/core/pages/MainMenu.vue'

const routes = [
  { path: '/', component: MainMenu },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})