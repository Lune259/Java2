<template>
  <div>
    <div class="topbar">
      <div class="wrap">
        <div>🎉 新用户首单立减 30 元 · 全场满 199 包邮</div>
        <div class="links">
          <span>📍 中国大陆</span>
          <span>我的订单</span>
          <span>会员中心</span>
          <span>客服热线 400-888-0001</span>
        </div>
      </div>
    </div>

    <AppHeader />

    <router-view />

    <SiteFooter />

    <ProductModal />
    <CartDrawer />
    <ToastHost />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import ProductModal from './components/ProductModal.vue'
import CartDrawer from './components/CartDrawer.vue'
import ToastHost from './components/ToastHost.vue'
</script>
