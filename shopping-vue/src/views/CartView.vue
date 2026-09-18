<template>
  <div class="wrap cart-view">
    <template v-if="done">
      <div class="cv-done">
        <div class="em">✅</div>
        <h2>下单成功！</h2>
        <p>共 {{ lastCount }} 件商品，应付 ¥{{ lastPay }}</p>
        <router-link to="/" class="cv-btn">返回首页</router-link>
      </div>
    </template>

    <template v-else-if="!store.cart.length">
      <div class="cv-empty">
        <div class="em">🛒</div>
        <p>购物车还是空的</p>
        <router-link to="/" class="cv-btn">去逛逛 →</router-link>
      </div>
    </template>

    <template v-else>
      <h1 class="cv-title">我的购物车</h1>
      <div class="cv-grid">
        <div class="cv-list">
          <div class="citem" v-for="it in store.cart" :key="it.id">
            <router-link :to="'/product/' + it.id" class="pic" :style="{ background: productOf(it.id).grad }">{{ productOf(it.id).emoji }}</router-link>
            <div class="c-main">
              <router-link :to="'/product/' + it.id" class="cv-name">{{ productOf(it.id).name }}</router-link>
              <div class="c-pr">¥{{ productOf(it.id).price }}</div>
              <div class="qty">
                <button @click="changeQty(it.id, -1)">−</button>
                <span>{{ it.qty }}</span>
                <button @click="changeQty(it.id, 1)">+</button>
              </div>
            </div>
            <button class="del" @click="removeItem(it.id)">✕</button>
          </div>
        </div>

        <aside class="cv-sum">
          <h3>订单摘要</h3>
          <div class="cv-row"><span>商品合计</span><b>¥{{ cartTotal }}</b></div>
          <div class="cv-row"><span>已优惠</span><span class="cv-save">-¥{{ savedAmt }}</span></div>
          <div class="cv-row"><span>运费</span><span>{{ shipping === 0 ? '包邮' : '¥' + shipping }}</span></div>
          <div class="cv-line"></div>
          <div class="cv-row cv-total"><span>应付</span><b>¥{{ payable }}</b></div>
          <p class="cv-tip" v-if="cartTotal < 199 && cartTotal > 0">再买 ¥{{ 199 - cartTotal }} 即可包邮</p>
          <button class="cv-submit" @click="placeOrder">提交订单</button>
          <router-link to="/" class="cv-continue">继续购物</router-link>
        </aside>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { PRODUCTS } from '../data.js'
import { useStore } from '../store.js'

const { store, cartTotal, savedAmt, changeQty, removeItem, clearCart, toast } = useStore()
const map = Object.fromEntries(PRODUCTS.map(p => [p.id, p]))
function productOf(id){ return map[id] }

const shipping = computed(() => {
  if (cartTotal.value === 0) return 0
  return cartTotal.value >= 199 ? 0 : 12
})
const payable = computed(() => cartTotal.value + shipping.value)

const done = ref(false)
const lastCount = ref(0)
const lastPay = ref(0)

function placeOrder(){
  if (!store.cart.length) return
  lastCount.value = store.cart.reduce((s, x) => s + x.qty, 0)
  lastPay.value = payable.value
  clearCart()
  done.value = true
  toast('下单成功，感谢惠顾 🎉')
}
</script>

<style scoped>
.cart-view{ padding:28px 0 60px; }
.cv-title{ font-size:26px; margin-bottom:22px; }
.cv-grid{ display:grid; grid-template-columns:1fr 320px; gap:28px; align-items:start; }
.cv-list{ display:flex; flex-direction:column; gap:14px; }
.cv-list .citem{ background:#fff; border-radius:16px; padding:14px; box-shadow:var(--shadow); border-bottom:none; }
.cv-name{ font-size:14px; font-weight:600; display:block; margin-bottom:6px; color:var(--ink); }
.cv-name:hover{ color:var(--brand); }
.cv-sum{ background:#fff; border-radius:18px; padding:20px; box-shadow:var(--shadow); position:sticky; top:90px; }
.cv-sum h3{ font-size:16px; margin-bottom:16px; }
.cv-row{ display:flex; justify-content:space-between; font-size:14px; color:var(--sub); margin-bottom:12px; }
.cv-save{ color:var(--ok); }
.cv-line{ height:1px; background:var(--line); margin:6px 0 14px; }
.cv-total{ font-size:15px; color:var(--ink); }
.cv-total b{ color:var(--brand); font-size:24px; }
.cv-tip{ font-size:12px; color:var(--muted); margin-bottom:14px; }
.cv-submit{ width:100%; height:48px; border-radius:14px; background:linear-gradient(135deg,var(--brand),var(--brand-2)); color:#fff; font-size:15px; font-weight:700; box-shadow:0 10px 24px rgba(255,71,87,.3); }
.cv-submit:hover{ transform:translateY(-2px); }
.cv-continue{ display:block; text-align:center; font-size:13px; color:var(--sub); margin-top:12px; }
.cv-continue:hover{ color:var(--brand); }
.cv-empty, .cv-done{ text-align:center; padding:80px 0; color:var(--muted); }
.cv-empty .em, .cv-done .em{ font-size:60px; margin-bottom:14px; }
.cv-empty p, .cv-done p{ margin-bottom:18px; }
.cv-btn{ display:inline-block; padding:12px 26px; border-radius:999px; background:linear-gradient(135deg,var(--brand),var(--brand-2)); color:#fff; font-weight:700; font-size:14px; }
.cv-done h2{ font-size:22px; color:var(--ink); margin-bottom:8px; }
@media (max-width:880px){ .cv-grid{ grid-template-columns:1fr; } .cv-sum{ position:static; } }
</style>
