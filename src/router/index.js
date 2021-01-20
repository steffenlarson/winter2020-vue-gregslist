import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
// @ts-ignore
import HomeDetailsPage from '../pages/HomeDetailsPage.vue'
// @ts-ignore
import HomesPage from '../pages/HomesPage.vue'

const routes = [
  // NOTE these are the routes for all of the routing that we will need for the application. To help travel between pages and to be used in the pages.
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }, {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
    path: '/homes',
    name: 'Homes',
    component: HomesPage
  }, {
    path: '/homes/:id',
    name: 'HomeDetails',
    component: HomeDetailsPage
  }, {
    path: '/:catchAll(.*)*',
    redirect: '/cars',
    component: null
  }
]
// REVIEW I do not understand exactly what these do? creates different routers for diffferent times that we will use it?
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
