<template>
  <main class="wrap">
    <HeroSlider />
    <CategoryBar />
    <FlashSale />
    <ProductSection />
    <div class="services" id="services">
      <div class="svc"><div class="ico">🚚</div><div><h5>极速发货</h5><p>24h 内出库，次日达</p></div></div>
      <div class="svc"><div class="ico">🛡️</div><div><h5>正品保障</h5><p>官方授权，假一赔十</p></div></div>
      <div class="svc"><div class="ico">↩️</div><div><h5>7 天无理由</h5><p>不满意随时退换</p></div></div>
      <div class="svc"><div class="ico">💬</div><div><h5>专属客服</h5><p>7×24 小时在线响应</p></div></div>
    </div>
  </main>
</template>

<script setup>
import HeroSlider from '../components/HeroSlider.vue'
import CategoryBar from '../components/CategoryBar.vue'
import FlashSale from '../components/FlashSale.vue'
import ProductSection from '../components/ProductSection.vue'
</script>
