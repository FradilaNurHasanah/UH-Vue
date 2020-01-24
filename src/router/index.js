import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navbar from '../views/layouts/Navbar.vue'
import Footer from '../views/layouts/Footer.vue'
import Sidebar from '../views/layouts/Sidebar.vue'
import Data_kantin from '../views/Data_kantin.vue'
import Data_makanan from '../views/Data_makanan.vue'
import Pembelian from '../views/Pembelian.vue'
import Beranda from '../views/Beranda.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Beranda',
    components: {default: Beranda, header: Navbar, sidebar: Sidebar, footer: Footer},
  },
  {
    path: '/data_kantin',
    name: 'data_kantin',
    components: {default: Data_kantin, header: Navbar, sidebar: Sidebar, footer: Footer},
  },
  {
    path: '/data_makanan',
    name: 'Data_makanan',
    components: {default: Data_makanan, header: Navbar, sidebar: Sidebar, footer: Footer},
  },
  {
    path: '/pembelian',
    name: 'Pembelian',
    components: {default: Pembelian, header: Navbar, sidebar: Sidebar, footer: Footer},
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
