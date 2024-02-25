import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import News from '../views/News.vue';
import contact from '../views/Contact.vue';


const routes = [
  { path: '/Home', component: Home },
  { path: '/news', component: News },
  { path: '/about', component: About },
  { path: '/contact', component: contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
