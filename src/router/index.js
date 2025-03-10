import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ExamplesPage from '@/views/ExamplesPage.vue';  // Import the new ExamplesPage component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/examples',
    name: 'Examples',
    component: ExamplesPage,  // Add the ExamplesPage route
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
