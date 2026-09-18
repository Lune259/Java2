<template>
  <section class="cats" id="cats">
    <div class="cat" v-for="c in CATS" :key="c.k" @click="pick(c.k)">
      <div class="ico" :style="{ background: c.c }">{{ c.e }}</div>
      <span>{{ c.n }}</span>
    </div>
  </section>
</template>

<script setup>
import { CATS } from '../data.js'
import { useStore } from '../store.js'
const { pickCat, scrollToGoods } = useStore()
function pick(k){ pickCat(k); scrollToGoods() }
</script>
