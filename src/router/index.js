import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { isAuthenticated } from './helpers';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/Signup.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/termini',
    name: 'Termini',
    component: () => import(/* webpackChunkName: "about" */ '../views/Termini.vue')
  },
  {
    path: '/onama',
    name: 'O nama',
    component: () => import(/* webpackChunkName: "about" */ '../views/O nama.vue')
  },
  {
    path: '/cjenik',
    name: 'Cjenik',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cjenik.vue')
  },
  {
    path: '/termini',
    name: 'Termini',
    component: () => import(/* webpackChunkName: "about" */ '../views/Termini.vue')
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: () => import(/* webpackChunkName: "about" */ '../views/Kontakt.vue')
  },
  {
    path: '/korisnici',
    name: 'Korisnici',
    component: () => import(/* webpackChunkName: "about" */ '../views/Korisnici.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
