<template>
  <div class="toast" :class="{ on: store.toast.show }">
    <span>{{ store.toast.icon }}</span>
    <span>{{ store.toast.msg }}</span>
  </div>
  <button class="to-top" :class="{ on: showTop }" @click="scrollTop">↑</button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useStore } from '../store.js'
const { store } = useStore()

const showTop = ref(false)
function onScroll(){ showTop.value = window.scrollY > 500 }
function scrollTop(){ window.scrollTo({ top: 0, behavior: 'smooth' }) }
onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
