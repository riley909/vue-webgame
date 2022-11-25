import Vue from 'vue';
import VueRouter from 'vue-router';
import FirstPage from '@/views/FirstPage';
import SecondPage from '@/views/SecondPage';
import ThirdPage from '@/views/ThirdPage';
import MineSweeper from '@/views/MineSweeper';
import Dashboard from '@/views/Dashboard';
import GridSystem from '@/views/GridSystem';
import GridListPage from '@/views/GridListPage';
import Breakpoints from '@/views/Breakpoints';
import Typography from '@/views/Typography';
import Forms from '@/views/Forms';
import Buttons from '@/views/Buttons';
import Tables from '@/views/Tables';
import Icons from '@/views/Icons';
import DefaultLayout from '@/layout/default/DefaultLayout';
import PageLayout from '@/layout/page/PageLayout';
import AuthenticationLayout from '@/layout/authentication/AuthenticationLayout';
import SignIn from '@/views/authentication/SignIn';
import SignUp from '@/views/authentication/SignUp';
import ProductList from '@/views/page/ProductList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { path: '/', name: 'Dashboard', component: Dashboard },
      { path: '/grid-system', name: 'GridSystem', component: GridSystem },
      { path: '/breakpoints', name: 'Breakpoints', component: Breakpoints },
      { path: '/grid-list-page', name: 'GridListPage', component: GridListPage },
      { path: '/typography', name: 'Typography', component: Typography },
      { path: '/tables', name: 'Tables', component: Tables },
      { path: '/forms', name: 'Forms', component: Forms },
      { path: '/buttons', name: 'Buttons', component: Buttons },
      { path: '/icons', name: 'Icons', component: Icons },
      { path: '/first', component: FirstPage },
      { path: '/second', component: SecondPage },
      { path: '/third', component: ThirdPage },
      { path: '/mine-sweeper', component: MineSweeper },
      {
        path: '/authentication',
        component: AuthenticationLayout,
        children: [
          { path: 'sign-in', name: 'SignIn', component: SignIn },
          { path: 'sign-up', name: 'SignUp', component: SignUp },
        ],
      },
      {
        path: '/page',
        component: PageLayout,
        children: [{ path: 'product-list', name: 'ProductList', component: ProductList }],
      },
    ],
  },
];

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes,
});

export default router;
