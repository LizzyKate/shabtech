import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './route';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import aos from "aos"
import "aos/dist/aos.css"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  created(){
    aos.init()
  },
  render: h => h(App),
  router: router
}).$mount('#app')
