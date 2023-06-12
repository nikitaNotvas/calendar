import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/home.vue'
import AboutPage from './views/about.vue'
import AboutPageUs from './views/moreaboutus.vue'

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
   {path: '/moreaboutus',
   name: 'more about us',
   component: AboutPageUs
   },
]

const router = createRouter({
   history: createWebHashHistory(),
   routes
})
export default router