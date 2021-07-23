import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'


import LoginComponent from './components/pages/Login/LoginComponent.vue'
import HomeComponent from './components/pages/Home/HomeComponent.vue'
import ProductComponent from './components/pages/Product/ProductComponent.vue'
import ClientsComponent from './components/pages/Clients/ClientsComponent.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

axios.defaults.baseURL='http://localhost:8000/api/';

const routes = [
  { path: '/', name: 'login' ,  component: LoginComponent },
  { path: '/home', name: 'home' ,  component: HomeComponent },
  { path: '/clients', name: 'clients' ,  component: ClientsComponent },
  { path: '/produit', name: 'produit' ,  component: ProductComponent },
  { path: '/vente', name: 'vente' ,  component: HomeComponent },
  { path: '/relation', name: 'relation' ,  component: HomeComponent },

]
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
