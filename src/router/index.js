import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue';  // Import the new ExamplesPage component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
