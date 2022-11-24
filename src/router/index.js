import Vue from 'vue';
import VueRouter from 'vue-router';
import FirstPage from '../views/FirstPage';
import SecondPage from '../views/SecondPage';
import MineSweeper from '../views/MineSweeper.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/first', component: FirstPage },
  { path: '/second', component: SecondPage },
  { path: '/mine-sweeper', component: MineSweeper },
];

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});

export default router;
