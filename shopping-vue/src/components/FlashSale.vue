<template>
  <section class="sec flash" id="flash">
    <div class="flash-top">
      <h3>⚡ 限时秒杀</h3>
      <div class="clock">距结束 <b>{{ hh }}</b>:<b>{{ mm }}</b>:<b>{{ ss }}</b></div>
    </div>
    <div class="flash-grid">
      <div class="fcard" v-for="p in FLASH" :key="p.id" @click="openDetail(p.id)">
        <div class="pic">{{ p.emoji }}</div>
        <h5>{{ p.name }}</h5>
        <div class="pr"><b>¥{{ p.price }}</b><s>¥{{ p.old }}</s></div>
        <div class="bar"><i :style="{ width: p.pct + '%' }"></i></div>
        <div class="sold">已抢 {{ p.pct }}% · 仅剩 {{ 100 - p.pct }} 件</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { FLASH } from '../data.js'
import { useStore } from '../store.js'

const { openDetail } = useStore()
FLASH.forEach(p => { p.pct = 40 + Math.floor(Math.random() * 55) })

const hh = ref('00'), mm = ref('00'), ss = ref('00')
function tick(){
  const now = new Date()
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0)
  let s = Math.floor((end - now) / 1000)
  hh.value = String(Math.floor(s / 3600)).padStart(2, '0')
  mm.value = String(Math.floor(s % 3600 / 60)).padStart(2, '0')
  ss.value = String(s % 60).padStart(2, '0')
}
let timer
onMounted(() => { tick(); timer = setInterval(tick, 1000) })
onUnmounted(() => clearInterval(timer))
</script>
