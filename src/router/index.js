import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Meeting.vue'
import MeetingCalendar from '../views/MeetingCalendar/MeetingCalendar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/meeting-calendar',
    name: 'meeting-calendar',
    component: MeetingCalendar
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
