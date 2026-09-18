<template>
  <div class="modal" :class="{ on: store.detailId }" @click.self="closeAll">
    <div class="box" v-if="p">
      <div class="m-pic" :style="{ background: p.grad }">
        {{ p.emoji }}
        <button class="m-close" @click="closeAll">✕</button>
      </div>
      <div class="m-main">
        <h3>{{ p.name }}</h3>
        <div class="m-sub">{{ p.sub }} · {{ catName }}</div>
        <div class="m-price">
          <div class="row"><b>{{ p.price }}</b><s>¥{{ p.old }}</s></div>
          <div class="save">立省 ¥{{ p.old - p.price }} · 已售 {{ p.sales > 10000 ? (p.sales / 10000).toFixed(1) + '万' : p.sales }} 件 · ★ {{ p.rating }}</div>
        </div>
        <div class="m-attrs">
          <div class="grp">
            <span class="lb">颜色</span>
            <span class="chip" :class="{ on: pick.color === 0 }" @click="pick.color = 0">经典黑</span>
            <span class="chip" :class="{ on: pick.color === 1 }" @click="pick.color = 1">云母白</span>
            <span class="chip" :class="{ on: pick.color === 2 }" @click="pick.color = 2">远山青</span>
          </div>
          <div class="grp">
            <span class="lb">版本</span>
            <span class="chip" :class="{ on: pick.version === 0 }" @click="pick.version = 0">标准版</span>
            <span class="chip" :class="{ on: pick.version === 1 }" @click="pick.version = 1">尊享版</span>
          </div>
          <div class="grp">
            <span class="lb">数量</span>
            <span class="chip" style="cursor:default">{{ qty }} 件</span>
          </div>
        </div>
        <div class="m-btns">
          <button class="btn-cart" @click="addToCart(p.id)">加入购物车</button>
          <button class="btn-buy" @click="buyNow">立即购买</button>
        </div>
        <button class="m-link" @click="openFull">查看完整详情页 →</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../store.js'

const router = useRouter()
const { store, detailProduct, addToCart, closeAll, openCart } = useStore()
const p = detailProduct

const catMap = {
  phone: '手机数码', pc: '电脑办公', app: '家用电器', cloth: '服饰鞋包',
  beauty: '美妆护肤', food: '食品生鲜', home: '家居家装', sport: '运动户外', baby: '母婴玩具'
}
const catName = computed(() => p.value ? (catMap[p.value.cat] || '精选') : '')
const pick = reactive({ color: 0, version: 0 })
const inCart = computed(() => p.value && store.cart.find(x => x.id === p.value.id))
const qty = computed(() => inCart.value ? inCart.value.qty : 1)

function buyNow(){
  if (!p.value) return
  addToCart(p.value.id, true)
  closeAll()
  openCart()
}
function openFull(){
  if (!p.value) return
  router.push('/product/' + p.value.id)
  closeAll()
}
</script>
