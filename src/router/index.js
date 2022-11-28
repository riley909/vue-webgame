import Vue from 'vue';
import VueRouter from 'vue-router';

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
    component: () => import(/* webpackChunkName: "layouts-default-index" */ '@/layout/default/DefaultLayout'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import(/* webpackChunkName: "views-dashboard" */ '@/views/Dashboard'),
      },
      {
        path: '/grid-system',
        name: 'GridSystem',
        component: import(/* webpackChunkName: "views-grid-system" */ '@/views/GridSystem'),
      },
      {
        path: '/breakpoints',
        name: 'Breakpoints',
        component: import(/* webpackChunkName: "views-breakpoints" */ '@/views/Breakpoints'),
      },
      {
        path: '/grid-list-page',
        name: 'GridListPage',
        component: import(/* webpackChunkName: "views-grid-list-page" */ '@/views/GridListPage'),
      },
      {
        path: '/typography',
        name: 'Typography',
        component: import(/* webpackChunkName: "views-typography" */ '@/views/Typography'),
      },
      { path: '/tables', name: 'Tables', component: import(/* webpackChunkName: "views-tables" */ '@/views/Tables') },
      { path: '/forms', name: 'Forms', component: import(/* webpackChunkName: "views-forms" */ '@/views/Forms') },
      {
        path: '/buttons',
        name: 'Buttons',
        component: import(/* webpackChunkName: "views-buttons" */ '@/views/Buttons'),
      },
      { path: '/icons', name: 'Icons', component: import(/* webpackChunkName: "views-icons" */ '@/views/Icons') },
      { path: '/mine-sweeper', component: import(/* webpackChunkName: "views-mine-sweeper" */ '@/views/MineSweeper') },
      {
        path: '/authentication',
        component: () =>
          import(/* webpackChunkName: "views-authentication-index" */ '@/layout/authentication/AuthenticationLayout'),
        children: [
          {
            path: 'sign-in',
            name: 'SignIn',
            component: () => import(/* webpackChunkName: "views-sign-in" */ '@/views/authentication/SignIn'),
          },
          {
            path: 'sign-up',
            name: 'SignUp',
            component: () => import(/* webpackChunkName: "views-sign-up" */ '@/views/authentication/SignUp'),
          },
        ],
      },
      {
        path: '/page',
        component: () => import(/* webpackChunkName: "layouts-page-index" */ '@/layout/page/PageLayout'),
        children: [
          {
            path: 'product-list',
            name: 'ProductList',
            component: import(/* webpackChunkName: "views-product-list" */ '@/views/ProductList'),
          },
        ],
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
