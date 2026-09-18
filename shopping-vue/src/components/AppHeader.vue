<template>
  <header>
    <div class="wrap head">
      <router-link to="/" class="logo">
        <div class="mark">🐱</div>
        <div><span>淘气猫<em>商城</em></span></div>
      </router-link>
      <nav class="menu">
        <a href="#" @click.prevent="goSection('goods')">全部商品</a>
        <a href="#" @click.prevent="goSection('flash')">限时秒杀</a>
        <a href="#" @click.prevent="goSection('cats')">分类</a>
        <a href="#" @click.prevent="goSection('services')">服务保障</a>
      </nav>
      <div class="search">
        <input
          :value="store.keyword"
          @input="onInput"
          @keyup.enter="doSearch"
          type="text"
          placeholder="搜索商品、品牌、分类…"
        >
        <button @click="doSearch">搜索</button>
        <div class="hotwords">
          <span @click="quick('手机')">手机</span>
          <span @click="quick('耳机')">耳机</span>
          <span @click="quick('咖啡')">咖啡</span>
          <span @click="quick('球鞋')">球鞋</span>
          <span @click="quick('面膜')">面膜</span>
        </div>
      </div>
      <div class="head-actions">
        <button class="icon-btn" title="收藏">❤️</button>
        <button class="icon-btn" @click="openCart" title="购物车">
          🛒<span v-if="cartCount" class="badge">{{ cartCount }}</span>
        </button>
        <div class="avatar">阿</div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useStore } from '../store.js'

const router = useRouter()
const { store, cartCount, openCart, setKeyword } = useStore()

function onInput(e){ setKeyword(e.target.value) }
function jump(){ if (router.currentRoute.value.path !== '/') router.push('/') }
function doSearch(){
  setKeyword(store.keyword)
  jump()
  setTimeout(() => document.getElementById('goods')?.scrollIntoView({ behavior: 'smooth' }), 80)
}
function quick(k){
  setKeyword(k)
  jump()
  setTimeout(() => document.getElementById('goods')?.scrollIntoView({ behavior: 'smooth' }), 80)
}
function goSection(id){
  jump()
  setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 80)
}
</script>
