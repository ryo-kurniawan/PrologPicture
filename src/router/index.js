import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PaketView from '../views/PaketView.vue'
import PaketDetailView from '../views/PaketDetail.vue'
import AboutView from '../views/AboutView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/paket',
    name: 'paket',
    component: PaketView
  },
  {
    path: '/paket/:id',
    name: 'paketdetail',
    component: PaketDetailView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
]

const router = new VueRouter({
  routes
})

export default router
