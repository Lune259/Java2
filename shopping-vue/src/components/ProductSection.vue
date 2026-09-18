<template>
  <section class="sec" id="goods">
    <div class="sec-head">
      <div>
        <h3><i>🔥</i> 为你精选</h3>
        <div class="desc">{{ desc }}</div>
      </div>
    </div>
    <div class="toolbar">
      <div class="tabs">
        <button
          v-for="c in CATS"
          :key="c.k"
          class="tab"
          :class="{ on: store.cat === c.k }"
          @click="pick(c.k)"
        >{{ c.n }}</button>
      </div>
      <div class="sorts">
        排序：
        <select v-model="store.sort">
          <option value="default">综合推荐</option>
          <option value="sales">销量优先</option>
          <option value="priceAsc">价格从低到高</option>
          <option value="priceDesc">价格从高到低</option>
          <option value="rating">评分最高</option>
        </select>
      </div>
    </div>
    <div class="grid">
      <ProductCard v-for="p in list" :key="p.id" :product="p" />
      <div class="empty" v-if="!list.length">
        <div class="em">🔍</div>没有找到相关商品<br>换个关键词试试吧
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { CATS, PRODUCTS } from '../data.js'
import { useStore } from '../store.js'
import ProductCard from './ProductCard.vue'

const { store, pickCat } = useStore()
function pick(k){ pickCat(k) }

const list = computed(() => {
  let arr = PRODUCTS.filter(p => {
    const okCat = store.cat === 'all' || p.cat === store.cat
    const kw = store.keyword.trim().toLowerCase()
    const okKw = !kw || p.name.toLowerCase().includes(kw) || p.sub.toLowerCase().includes(kw)
    return okCat && okKw
  })
  const s = store.sort
  if (s === 'sales') arr.sort((a, b) => b.sales - a.sales)
  else if (s === 'priceAsc') arr.sort((a, b) => a.price - b.price)
  else if (s === 'priceDesc') arr.sort((a, b) => b.price - a.price)
  else if (s === 'rating') arr.sort((a, b) => b.rating - a.rating)
  else arr.sort((a, b) => b.sales * b.rating - a.sales * a.rating)
  return arr
})

const desc = computed(() =>
  store.keyword
    ? `“${store.keyword}” 找到 ${list.value.length} 件商品`
    : `共 ${list.value.length} 件好物`
)
</script>
