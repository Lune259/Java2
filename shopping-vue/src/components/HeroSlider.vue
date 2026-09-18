<template>
  <section class="hero">
    <div class="slider">
      <div
        v-for="(s, i) in slides"
        :key="i"
        class="slide"
        :class="[s.cls, { on: i === si }]"
      >
        <div>
          <h2>{{ s.title[0] }}<br>{{ s.title[1] }}</h2>
          <p>{{ s.desc }}</p>
          <a class="cta" href="#goods">{{ s.ctaText }}</a>
        </div>
        <div class="big">{{ s.emoji }}</div>
      </div>
      <div class="dots">
        <i
          v-for="(s, i) in slides"
          :key="i"
          :class="{ on: i === si }"
          @click="go(i)"
        ></i>
      </div>
    </div>
    <div class="side">
      <div class="promo p-a" @click="quick('耳机')">
        <h4>数码专场</h4>
        <p>爆款耳机 · 智能手表<br>券后低至 99 元</p>
        <div class="em">🎧</div>
      </div>
      <div class="promo p-b" @click="quick('咖啡')">
        <h4>会员日 5 折</h4>
        <p>食品饮料 · 囤货正当时<br>每天 10 点上新</p>
        <div class="em">☕</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from '../store.js'
const { setKeyword, scrollToGoods } = useStore()

const slides = [
  { cls: 's1', title: ['秋季新品周', '全场低至 5 折'], desc: '精选 300+ 好物，数码、家居、美妆、食品一站购齐，新人再减 30 元。', ctaText: '立即抢购 →', emoji: '🛍️' },
  { cls: 's2', title: ['数码焕新计划', '旗舰手机直降 800'], desc: '以旧换新最高补贴 1200 元，12 期免息，闪电发货次日达。', ctaText: '查看会场 →', emoji: '📱' },
  { cls: 's3', title: ['生鲜产地直发', '48 小时从枝头到餐桌'], desc: '坏果包赔，冷链直送，会员专享折扣价。', ctaText: '逛逛超市 →', emoji: '🍓' }
]

const si = ref(0)
let timer
function go(i){ si.value = i }
function tick(){ si.value = (si.value + 1) % slides.length }
function quick(k){ setKeyword(k); scrollToGoods() }

onMounted(() => { timer = setInterval(tick, 5000) })
onUnmounted(() => clearInterval(timer))
</script>
