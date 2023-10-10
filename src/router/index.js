import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)



const routes = [

  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/main-page',
    name: 'main-page',
    component: () => import('../views/MainPage.vue')
  },
  {
    path: '/ahuan-services',
    name: 'ahuan-services',
    component: () => import('../views/AhuanServices.vue')
  },
  {
    path: '/time-hotel',
    name: 'time-hotel',
    component: () => import('../views/TimeHotel.vue')
  },
  {
    path: '/safety-tips',
    name: 'safety-tips',
    component: () => import('../views/SafetyTips.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/ContactUs.vue')
  },
  {
    path: '/resturant',
    name: 'resturant-hotel',
    component: () => import('../views/Resturant.vue')
  },
  {
    path: '/tourist-attractions',
    name: 'tourist-attractions',
    component: () => import('../views/TouristAttractions.vue')
  },
  {
    path: '/weekly-markets',
    name: 'weekly-markets',
    component: () => import('../views/WeeklyMarkets.vue')
  },
  {
    path: '/local-foods',
    name: 'local-foods',
    component: () => import('../views/LocalFoods.vue')
  },
  {
    path: '/hotel-description',
    name: 'hotel-description',
    component: () => import('../views/HotelDescription.vue')
  },
  {
    path: '/rules',
    name: 'rules-hotel',
    component: () => import('../views/Rules.vue')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFound.vue')
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
