import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddMember from '../components/AddMember.vue'
import Modal from '../components/Modal.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/addmember',
    name: 'AddMember',
    component: AddMember
  },
  {
    path: '/member/:id',
    name: 'Modal',
    component: Modal,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
