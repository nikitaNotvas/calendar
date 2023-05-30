import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/home.vue'
import AboutPage from './views/about.vue'

const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage
   },
   {
      path: '/about',
      name: 'about',
      component: AboutPage
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router