import VueRouter from "vue-router";

const listRouter = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'listRoot',
    },
    {
      path: '/list',
      name: ''
    }
  ]
})