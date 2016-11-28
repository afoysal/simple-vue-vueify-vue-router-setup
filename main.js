// main.js
const Vue = require('vue');
const VueRouter = require('vue-router');

// tell vue.js to use router capabilities
Vue.use(VueRouter);

// routing vueified components
var router = new VueRouter({
  routes: [
    { path: '/', component: require("./home.vue") },
    { path: '/contacts', component: require("./contacts.vue") },
    { path: '/events', component: require("./events.vue") },
  ]
});

// this vue component will act as the root for our SPA
var baserouter = require("./baserouter.vue");

// and finally, mount the view-model instance
new Vue({
  router: router,
  render: function (createElement) {
    return createElement(baserouter);
  }
}).$mount("#mountpoint");
