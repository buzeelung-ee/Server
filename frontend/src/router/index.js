import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Step3View from '../views/Step3.vue'
import Step4View from '../views/Step4.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/step2',
      name: 'step2',
      component: () => import('../views/Step2.vue')
    },
    {
      path: '/step3',
      name: 'step3',
      component: Step3View
    },
    {
      path: '/step4',
      name: 'step4',
      component: Step4View
    }
  ]
})

export default router
