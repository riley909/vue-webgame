import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '@/layout/default/DefaultLayout';
import Dashboard from '@/views/Dashboard';
import GridSystem from '@/views/GridSystem';
import Breakpoints from '@/views/Breakpoints';
import GridListPage from '@/views/GridListPage';
import Typography from '@/views/Typography';
import BasicTable from '@/views/table/BasicTable';
import AppTable from '@/views/table/AppTable';
import Buttons from '@/views/Buttons';
import Icons from '@/views/Icons';
import AppForm from '@/views/form/AppForm';
import ValidationForm from '@/views/form/ValidationForm';
import MineSweeper from '@/views/MineSweeper';
import AuthenticationLayout from '@/layout/authentication/AuthenticationLayout';
import SignIn from '@/views/authentication/SignIn';
import SignUp from '@/views/authentication/SignUp';
import PageLayout from '@/layout/page/PageLayout';
import ProductList from '@/views/page/ProductList';

// 웹페이지에 처음 접속하면 /test로 접근하지 않아도 /test의 리소스를 확인할 수 있음(화면에는 안나오지만 콘솔로그는 확인되고 리소스는 로딩됨)
// 컴포넌트에 레이지로딩을 적용하면 처음 사이트에 접속했을때 컴포넌트의 로딩을 막고 해당 페이지에 접근해야만 리소스들을 로딩할 수 있음
// 뷰에서 레이지로딩은 비동기컴포넌트를 사용해 적용함
// 프로미스를 반환하는 팩토리함수
// 팩토리함수 = 객체를 리턴하는 함수라고 할수있음
// 리턴값은 프로미스여야 하기때문에 resolve, reject로 함
// 리턴으로 컴포넌트를 가져와야 하는데 권장되는 방법은 dynamic import임
// dynamic import는 리턴으로 프로미스를 반환하기 때문에 그냥 리턴하면됨
// dynamic import를 사용해서 컴포넌트를 가져오면 웹팩에서 번들링을 할때 자동으로 해당 컴포넌트의 코드를 분할해서 빌드함
// 빌드 후에 /dist에서 확인하면 chunk 파일로 분할되어있는것을 볼수있음
// 모든 컴포넌트가 다 분할되어서 빌드되고 청크파일이 너무 많이 생기면 비효율적일 수도 있음
// 청크파일을 그룹으로 묶어서 생성하고 싶을때 웹팩의 특수 주석 /* webpackChunkName: "묶고싶은 그룹이름" */ 을 사용

// dynamic import 사용시 [Vue warn]: Failed to mount component: 에러

// const Test = function () {
//   return import('@/views/Test');
//  // resolve({
//   //  template: '<div>HELLO!</div>',
//  // });
// };

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem,
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: Breakpoints,
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: GridListPage,
      },
      {
        path: '/typography',
        name: 'Typography',
        component: Typography,
      },
      { path: '/tables/basic-table', name: 'BasicTable', component: BasicTable },
      { path: '/tables/app-table', name: 'AppTable', component: AppTable },
      { path: '/forms/app-form', name: 'AppForm', component: AppForm },
      { path: '/forms/validation-form', name: 'ValidationForm', component: ValidationForm },
      {
        path: '/buttons',
        name: 'Buttons',
        component: Buttons,
      },
      { path: '/icons', name: 'Icons', component: Icons },
      { path: '/mine-sweeper', component: MineSweeper },
    ],
  },
  {
    path: '/authentication',
    component: AuthenticationLayout,
    children: [
      {
        path: 'sign-in',
        name: 'SignIn',
        component: SignIn,
      },
      {
        path: 'sign-up',
        name: 'SignUp',
        component: SignUp,
      },
    ],
  },
  {
    path: '/page',
    component: PageLayout,
    children: [
      {
        path: 'product-list',
        name: 'ProductList',
        component: ProductList,
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
