<template>
  <div class="card" @click="openDetail(product.id)">
    <div class="pic" :style="{ background: product.grad }">
      {{ product.emoji }}
      <span v-if="product.tag" class="tag">{{ product.tag }}</span>
      <span class="fav" :class="{ on: faved }" @click.stop="toggleFav(product.id)">
        {{ faved ? '❤️' : '🤍' }}
      </span>
    </div>
    <div class="info">
      <h4>{{ product.name }}</h4>
      <div class="sub">{{ product.sub }}</div>
      <div class="meta">
        <span class="star">★ {{ product.rating }}</span>
        <span>{{ salesText(product.sales) }} 人已买</span>
      </div>
      <div class="price"><b>{{ product.price }}</b><s>¥{{ product.old }}</s></div>
      <button class="add" @click.stop="addToCart(product.id)">+</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '../store.js'

const props = defineProps({ product: Object })
const { store, addToCart, toggleFav } = useStore()
const faved = computed(() => store.favs.includes(props.product.id))

function salesText(n){ return n > 10000 ? (n / 10000).toFixed(1) + '万' : n }
</script>
