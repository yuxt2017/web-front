export default [
  {
    path: '/',
    component: (resolve: any) => require(['../views/index/index.vue'], resolve),
    name: 'index',
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/demo',
    component: (resolve: any) => require(['../views/demo/demo.tsx'], resolve),
    name: 'demo',
    meta: {
      keepAlive: false,
    },
  },

];

