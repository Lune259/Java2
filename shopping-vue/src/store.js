import { reactive, computed } from 'vue'
import { PRODUCTS } from './data.js'

const KEY_CART = 'taoqi_cart'
const KEY_FAV = 'taoqi_fav'

function load(k, def){
  try {
    const r = JSON.parse(localStorage.getItem(k))
    return Array.isArray(r) ? r : def
  } catch(e){ return def }
}

const store = reactive({
  cat: 'all',
  keyword: '',
  sort: 'default',
  cart: load(KEY_CART, []),
  favs: load(KEY_FAV, []),
  detailId: null,
  cartOpen: false,
  toast: { show: false, msg: '', icon: '✅' }
})

function saveCart(){ try { localStorage.setItem(KEY_CART, JSON.stringify(store.cart)) } catch(e){} }
function saveFav(){ try { localStorage.setItem(KEY_FAV, JSON.stringify(store.favs)) } catch(e){} }

const cartCount = computed(() => store.cart.reduce((s, x) => s + x.qty, 0))
const cartTotal = computed(() => store.cart.reduce((s, x) => {
  const p = PRODUCTS.find(y => y.id === x.id); return s + (p ? p.price : 0) * x.qty
}, 0))
const savedAmt = computed(() => store.cart.reduce((s, x) => {
  const p = PRODUCTS.find(y => y.id === x.id); return s + (p ? p.old - p.price : 0) * x.qty
}, 0))
const detailProduct = computed(() => store.detailId ? PRODUCTS.find(p => p.id === store.detailId) : null)

function addToCart(id, silent){
  const it = store.cart.find(x => x.id === id)
  if (it) it.qty++
  else store.cart.push({ id, qty: 1 })
  saveCart()
  if (!silent) toast(`已加入购物车：${PRODUCTS.find(x => x.id === id).name.slice(0, 12)}…`, '🛒')
}
function changeQty(id, d){
  const it = store.cart.find(x => x.id === id)
  if (!it) return
  it.qty += d
  if (it.qty <= 0) store.cart = store.cart.filter(x => x.id !== id)
  saveCart()
}
function removeItem(id){ store.cart = store.cart.filter(x => x.id !== id); saveCart() }
function toggleFav(id){
  const i = store.favs.indexOf(id)
  if (i >= 0){ store.favs.splice(i, 1); toast('已取消收藏') }
  else { store.favs.push(id); toast('已加入收藏 ❤️') }
  saveFav()
}
function pickCat(k){ store.cat = k; store.keyword = '' }
function setKeyword(kw){ store.keyword = kw }
function openDetail(id){ store.detailId = id }
function openCart(){ store.cartOpen = true }
function closeAll(){ store.detailId = null; store.cartOpen = false }
function checkout(){
  if (!store.cart.length) return
  const n = store.cart.reduce((s, x) => s + x.qty, 0)
  store.cart = []
  saveCart()
  closeAll()
  toast(`订单已提交，共 ${n} 件商品 🎉`)
}
function clearCart(){ store.cart = []; saveCart() }
function scrollToGoods(){
  const el = document.getElementById('goods')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

let t
function toast(msg, icon){
  store.toast = { show: true, msg, icon: icon || '✅' }
  clearTimeout(t)
  t = setTimeout(() => { store.toast.show = false }, 2200)
}

export function useStore(){
  return {
    store, cartCount, cartTotal, savedAmt, detailProduct,
    addToCart, changeQty, removeItem, toggleFav,
    pickCat, setKeyword, openDetail, openCart, closeAll, checkout, clearCart,
    scrollToGoods, toast
  }
}
