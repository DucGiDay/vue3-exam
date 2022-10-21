import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/user-info', 
    component: () => import('@/components/pages/UserProfile.vue')
  },
  { 
    path: '/login', 
    component: () => import('@/components/pages/LoginPage.vue'),
    meta: { layout: 'default' },
  },
  { 
    path: '/register', 
    component: () => import('@/components/pages/RegisterPage.vue'),
    meta: { layout: 'default' },
  },
 
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
