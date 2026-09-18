<template>
  <div class="mask" :class="{ on: store.cartOpen }" @click="closeAll"></div>
  <aside class="drawer" :class="{ on: store.cartOpen }">
    <div class="dr-head">
      <h3>购物车 <span style="color:var(--muted);font-size:14px;font-weight:500">({{ cartCount }})</span></h3>
      <button class="close" @click="closeAll">✕</button>
    </div>
    <div class="dr-body">
      <div class="cart-empty" v-if="!store.cart.length">
        <div class="em">🛒</div>购物车还是空的<br>去挑几件心仪的好物吧
      </div>
      <div class="citem" v-for="it in store.cart" :key="it.id">
        <div class="pic" :style="{ background: productOf(it.id).grad }">{{ productOf(it.id).emoji }}</div>
        <div class="c-main">
          <h5>{{ productOf(it.id).name }}</h5>
          <div class="c-pr">{{ productOf(it.id).price }}</div>
          <div class="qty">
            <button @click="changeQty(it.id, -1)">−</button>
            <span>{{ it.qty }}</span>
            <button @click="changeQty(it.id, 1)">+</button>
          </div>
        </div>
        <button class="del" @click="removeItem(it.id)">✕</button>
      </div>
    </div>
    <div class="dr-foot">
      <div class="sum"><span>合计</span><b>{{ cartTotal }}</b></div>
      <div class="tip">已优惠 <span>¥{{ savedAmt }}</span> · 满 199 包邮</div>
      <button class="checkout" @click="goCheckout">去结算</button>
    </div>
  </aside>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { PRODUCTS } from '../data.js'
import { useStore } from '../store.js'

const router = useRouter()
const { store, cartCount, cartTotal, savedAmt, changeQty, removeItem, closeAll } = useStore()
const map = Object.fromEntries(PRODUCTS.map(p => [p.id, p]))
function productOf(id){ return map[id] }
function goCheckout(){ closeAll(); router.push('/cart') }
</script>
