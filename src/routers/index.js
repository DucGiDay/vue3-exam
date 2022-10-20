import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/user-info', 
    component: () => import('@/components/UserProfile.vue')
  },
  { 
    path: '/login', 
    component: () => import('@/components/LoginPage.vue'),
    meta: { layout: 'default' },
  },
  { 
    path: '/register', 
    component: () => import('@/components/RegisterPage.vue'),
    meta: { layout: 'default' },
  },
 
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
