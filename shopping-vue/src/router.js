import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ProductView from './views/ProductView.vue'
import CartView from './views/CartView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/product/:id', component: ProductView, props: true },
    { path: /cart, component: CartView }
  ],
  scrollBehavior(){
    return { top: 0 }
  }
})
