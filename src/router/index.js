import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import ArticlesView from '../views/ArticlesView.vue'
import ReviewsView from '../views/ReviewsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesView
  },
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
