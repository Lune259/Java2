<template>
  <div class="pd" v-if="p">
    <div class="wrap pd-grid">
      <div class="pd-left">
        <div class="pd-hero" :style="{ background: p.grad }">{{ p.emoji }}</div>
        <div class="pd-thumbs">
          <div v-for="n in 4" :key="n" class="pd-thumb" :style="{ background: p.grad }">{{ p.emoji }}</div>
        </div>
      </div>

      <div class="pd-right">
        <nav class="pd-crumb">
          <router-link to="/">首页</router-link> / {{ catName }} / {{ p.name }}
        </nav>
        <h1 class="pd-title">{{ p.name }}</h1>
        <p class="pd-sub">{{ p.sub }}</p>
        <div class="pd-meta">
          <span class="star">★ {{ p.rating }}</span>
          <span>{{ salesText }} 人已买</span>
        </div>

        <div class="pd-price">
          <b>¥{{ p.price }}</b><s>¥{{ p.old }}</s>
          <span class="pd-save">立省 ¥{{ p.old - p.price }}</span>
        </div>

        <div class="pd-attrs">
          <div class="pd-grp">
            <span class="lb">颜色</span>
            <span class="chip" v-for="(c, i) in colors" :key="c" :class="{ on: colorIdx === i }" @click="colorIdx = i">{{ c }}</span>
          </div>
          <div class="pd-grp">
            <span class="lb">版本</span>
            <span class="chip" v-for="(v, i) in versions" :key="v" :class="{ on: versionIdx === i }" @click="versionIdx = i">{{ v }}</span>
          </div>
          <div class="pd-grp">
            <span class="lb">数量</span>
            <div class="qty">
              <button @click="qty > 1 && qty--">−</button>
              <span>{{ qty }}</span>
              <button @click="qty++">+</button>
            </div>
          </div>
        </div>

        <div class="pd-actions">
          <button class="btn-cart" @click="add">加入购物车</button>
          <button class="btn-buy" @click="buy">立即购买</button>
          <button class="pd-fav" @click="onFav">{{ faved ? '❤️ 已收藏' : '🤍 收藏' }}</button>
        </div>

        <ul class="pd-points">
          <li>🚚 极速发货，24h 内出库</li>
          <li>🛡️ 正品保障，假一赔十</li>
          <li>↩️ 7 天无理由退换</li>
        </ul>
      </div>
    </div>

    <div class="wrap pd-section">
      <h3 class="pd-h3">商品详情</h3>
      <p class="pd-p">{{ p.name }} —— {{ p.sub }}。本商品由淘气猫商城官方甄选，享正品保障与极速发货服务，支持 7 天无理由退换，让您买得放心、用得舒心。</p>
      <div class="pd-banner" :style="{ background: p.grad }">{{ p.emoji }}</div>
    </div>

    <div class="wrap pd-section">
      <h3 class="pd-h3">规格参数</h3>
      <table class="pd-table">
        <tr><td>商品类别</td><td>{{ catName }}</td></tr>
        <tr><td>用户评分</td><td>★ {{ p.rating }}</td></tr>
        <tr><td>累计销量</td><td>{{ salesText }} 件</td></tr>
        <tr><td>商品卖点</td><td>{{ p.sub }}</td></tr>
      </table>
    </div>

    <div class="wrap pd-section">
      <h3 class="pd-h3">用户评价（{{ reviews.length }}）</h3>
      <div class="pd-review" v-for="(r, i) in reviews" :key="i">
        <div class="pd-ravatar">{{ r.u[0] }}</div>
        <div class="pd-rbody">
          <div class="pd-rname">{{ r.u }} <span class="star">★ {{ r.star }}</span></div>
          <div class="pd-rtext">{{ r.text }}</div>
        </div>
      </div>
    </div>

    <div class="wrap pd-section" v-if="related.length">
      <h3 class="pd-h3">同类推荐</h3>
      <div class="grid">
        <ProductCard v-for="x in related" :key="x.id" :product="x" />
      </div>
    </div>
  </div>
  <div class="wrap pd-empty" v-else>商品不存在或已下架</div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { PRODUCTS } from '../data.js'
import { useStore } from '../store.js'
import ProductCard from '../components/ProductCard.vue'

const props = defineProps({ id: [String, Number] })
const router = useRouter()
const { store, addToCart, toggleFav, openCart, closeAll } = useStore()

const p = computed(() => PRODUCTS.find(x => x.id === Number(props.id)))
const catMap = {
  phone: '手机数码', pc: '电脑办公', app: '家用电器', cloth: '服饰鞋包',
  beauty: '美妆护肤', food: '食品生鲜', home: '家居家装', sport: '运动户外', baby: '母婴玩具'
}
const catName = computed(() => p.value ? (catMap[p.value.cat] || '精选') : '')
const salesText = computed(() =>
  p.value ? (p.value.sales > 10000 ? (p.value.sales / 10000).toFixed(1) + '万' : p.value.sales) : 0)
const faved = computed(() => p.value && store.favs.includes(p.value.id))
const related = computed(() =>
  p.value ? PRODUCTS.filter(x => x.cat === p.value.cat && x.id !== p.value.id).slice(0, 4) : [])

const colors = ['经典黑', '云母白', '远山青']
const versions = ['标准版', '尊享版']
const colorIdx = ref(0)
const versionIdx = ref(0)
const qty = ref(1)

const reviews = [
  { u: '甜***豆', star: 5, text: '包装很精致，到货很快，质量超出预期，会回购！' },
  { u: 'M***o', star: 5, text: '用了一周，体验非常好，客服也很耐心，点赞。' },
  { u: '阿***七', star: 4, text: '整体不错，性价比高，唯一小缺点是说明书略简。' }
]

function add(){ if (p.value) addToCart(p.value.id) }
function buy(){ if (p.value){ addToCart(p.value.id, true); closeAll(); openCart() } }
function onFav(){ if (p.value) toggleFav(p.value.id) }
</script>

<style scoped>
.pd-grid{ display:grid; grid-template-columns: 440px 1fr; gap:36px; padding-top:24px; }
.pd-hero{ height:440px; border-radius:22px; display:grid; place-items:center; font-size:170px; }
.pd-thumbs{ display:flex; gap:12px; margin-top:12px; }
.pd-thumb{ width:100px; height:100px; border-radius:14px; display:grid; place-items:center; font-size:42px; cursor:pointer; border:2px solid transparent; }
.pd-thumb:hover{ border-color:var(--brand); }
.pd-crumb{ font-size:12.5px; color:var(--muted); margin-bottom:12px; }
.pd-crumb a{ color:var(--muted); }
.pd-crumb a:hover{ color:var(--brand); }
.pd-title{ font-size:26px; line-height:1.35; margin-bottom:8px; }
.pd-sub{ font-size:14px; color:var(--muted); margin-bottom:14px; }
.pd-meta{ display:flex; gap:16px; font-size:12.5px; color:var(--muted); margin-bottom:16px; }
.pd-price{ background:linear-gradient(135deg,#fff5f5,#fff9f5); border-radius:16px; padding:18px 20px; margin-bottom:20px; display:flex; align-items:baseline; gap:12px; }
.pd-price b{ color:var(--brand); font-size:32px; font-weight:800; }
.pd-price b::before{ content:'¥'; font-size:16px; }
.pd-price s{ color:var(--muted); font-size:14px; }
.pd-save{ margin-left:auto; color:var(--ok); font-weight:600; font-size:13px; }
.pd-attrs{ display:flex; flex-direction:column; gap:16px; margin-bottom:22px; }
.pd-grp{ display:flex; gap:10px; font-size:14px; align-items:baseline; }
.pd-grp .lb{ color:var(--muted); width:44px; flex-shrink:0; }
.pd-actions{ display:flex; gap:12px; margin-bottom:22px; flex-wrap:wrap; }
.pd-fav{ height:48px; padding:0 18px; border-radius:14px; background:#f6f7f9; color:var(--sub); font-size:14px; font-weight:600; }
.pd-fav:hover{ background:var(--brand-soft); color:var(--brand); }
.pd-points{ list-style:none; display:flex; flex-direction:column; gap:8px; font-size:13px; color:var(--sub); background:#fafbfc; border-radius:14px; padding:16px 18px; }
.pd-section{ margin-top:42px; }
.pd-h3{ font-size:20px; margin-bottom:16px; }
.pd-p{ font-size:14px; color:var(--sub); line-height:1.9; margin-bottom:16px; }
.pd-banner{ height:240px; border-radius:18px; display:grid; place-items:center; font-size:120px; }
.pd-table{ width:100%; border-collapse:collapse; font-size:14px; }
.pd-table td{ padding:14px 16px; border-bottom:1px solid var(--line); }
.pd-table td:first-child{ color:var(--muted); width:140px; background:#fafbfc; }
.pd-review{ display:flex; gap:14px; padding:16px 0; border-bottom:1px solid var(--line); }
.pd-ravatar{ width:42px; height:42px; border-radius:50%; background:linear-gradient(135deg,#6a7dff,#a06bff); color:#fff; display:grid; place-items:center; font-weight:700; flex-shrink:0; }
.pd-rname{ font-size:13.5px; font-weight:600; margin-bottom:6px; }
.pd-rtext{ font-size:13.5px; color:var(--sub); line-height:1.7; }
.pd-empty{ padding:80px 0; text-align:center; color:var(--muted); }
@media (max-width:880px){
  .pd-grid{ grid-template-columns:1fr; gap:20px; }
  .pd-hero{ height:300px; font-size:120px; }
}
</style>
