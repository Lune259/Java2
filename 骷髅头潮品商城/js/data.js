/* ===== 骷髅头潮品商城 SKULL MALL 数据层 ===== */

/* 骷髅相关系列 / 分类 */
const CATEGORIES = [
  { id: 'tee',      name: '骷髅T恤',    icon: '💀', sub: ['印花T恤', '重磅短袖', '长袖打底', 'oversize'] },
  { id: 'hoodie',   name: '连帽卫衣',   icon: '🧥', sub: ['加绒卫衣', '拉链外套', '冲锋衣', '夹克'] },
  { id: 'ring',     name: '骷髅饰品',   icon: '💍', sub: ['戒指', '项链', '耳钉', '手链'] },
  { id: 'bag',      name: '骷髅箱包',   icon: '🎒', sub: ['双肩包', '斜挎包', '腰包', '胸包'] },
  { id: 'figure',   name: '骷髅摆件',   icon: '🗿', sub: ['树脂雕像', '头骨模型', '香炉灯', '桌面摆件'] },
  { id: 'shoes',    name: '骷髅鞋靴',   icon: '👟', sub: ['板鞋', '马丁靴', '帆布鞋', '拖鞋'] },
  { id: 'deco',     name: '暗黑家居',   icon: '🕯️', sub: ['蜡烛灯台', '挂毯海报', '地毯', '杯具'] },
  { id: 'tool',     name: '骷髅工具',   icon: '🔧', sub: ['手办工具', '钥匙扣', '打火机', '开瓶器'] },
  { id: 'tattoo',   name: '纹身贴纸',   icon: '🎨', sub: ['临时纹身', '防水贴纸', '烫金贴', '套装'] },
  { id: 'vinyl',    name: '黑胶潮玩',   icon: '🎧', sub: ['黑胶唱片', '手办公仔', '盲盒', '拼图'] },
];

const BRANDS = ['SKULL LAB', 'OSSEOUS', 'GRAVE WALK', 'BONEHEAD', 'MORTIS', 'DEAD ROMANCE', 'CRANIUM', 'NECRO', 'REAPER', 'BLACK MASS'];

/* 商品名池——骷髅主题 */
const NAME_POOL = {
  tee:    ['骷髅裂痕重磅纯棉T恤 250g', '墨西哥亡灵节印花短袖', '透视骨骼X光图案T恤', '哥特字体骷髅头长袖打底', '大骷髅oversize落肩T恤', '双面骷髅涂鸦短袖'],
  hoodie: ['骷髅兜帽加绒卫衣 480g', '骨爪拉链连帽外套', '死神镰刀印花冲锋衣', '骷髅刺绣棒球夹克', '暗黑骷髅抓绒卫衣', '连帽骷髅字母套装'],
  ring:   ['纯银骷髅头开口戒指 925', '钛钢骷髅眼骨戒情侣款', '鎏金骷髅掌骨戒指', '黑曜石骷髅戒 男士', '骨指关节戒指三件套', '镂空骷髅尾戒'],
  bag:    ['骷髅印花双肩包 大容量', '暗黑骷髅斜挎胸包', '战术骷髅腰包 防水', '骷髅拉链机车背包', 'skull联名电脑包15.6寸', '皮革骷髅小方包'],
  figure: ['树脂骷髅头雕像 1:1 实物比例', '赛博朋克机械骷髅摆件', '骷髅头香炉灯 带喷雾', '水晶骷髅头模型 夜光', '骷髅手抓球桌面摆件', '蒸汽朋克骷髅钟表'],
  shoes:  ['骷髅涂鸦帆布板鞋', '厚底马丁靴 骷髅扣', '骷髅头刺绣休闲鞋', '暗黑骷髅洞洞拖鞋', '骷髅爪轻便运动鞋', '高帮骷髅帆布鞋'],
  deco:   ['骷髅头香薰蜡烛灯台', '暗黑哥特挂毯 骷髅图案', '骷髅地垫 防滑入户', '骷髅造型陶瓷马克杯', '骷髅烛台三件套 铁艺', '发光骷髅头小夜灯'],
  tool:   ['骷髅头金属钥匙扣', '骷髅造型打火机 金属', '骷髅头开瓶器 便携', '骷髅手柄螺丝刀套装', '骷髅头U盘 64G', '骷髅模型拼装工具包'],
  tattoo: ['骷髅临时纹身贴 30张', '防水骷髅手臂贴纸', '烫金骷髅纹身贴 大号', '哥特骷髅全身贴套装', '荧光骷髅贴纸 夜光', '骷髅图腾半永久纹身贴'],
  vinyl:  ['暗黑骷髅黑胶唱片 LP', '骷髅头盲盒手办 单只', '哥特骷髅公仔摆件', '骷髅拼图 1000片', '骷髅头立体拼图 木质', '限定骷髅手办 高28cm'],
};

const ICON_POOL = {
  tee: '👕', hoodie: '🧥', ring: '💍', bag: '🎒', figure: '🗿',
  shoes: '👟', deco: '🕯️', tool: '🔧', tattoo: '🎨', vinyl: '🎧',
};

/* 商品副标题池 */
const SUB_POOL = {
  tee: ['印花T恤', '重磅短袖', 'oversize'],
  hoodie: ['加绒卫衣', '拉链外套', '冲锋衣'],
  ring: ['戒指', '情侣戒', '戒指套装'],
  bag: ['双肩包', '斜挎包', '腰包'],
  figure: ['树脂雕像', '桌面摆件', '夜光模型'],
  shoes: ['板鞋', '马丁靴', '帆布鞋'],
  deco: ['蜡烛灯台', '挂毯', '家饰'],
  tool: ['钥匙扣', '打火机', '工具'],
  tattoo: ['临时纹身', '防水贴纸', '烫金贴'],
  vinyl: ['黑胶唱片', '手办盲盒', '拼图'],
};

/* 骷髅母题标语 */
const SLOGANS = [
  'MEMENTO MORI · 记住你终将死去',
  'DEATH BEFORE DISHONOR',
  'FROM DUST TO DUST',
  'SKULL & BONES · 骨與骨',
  'REST IN PIECES',
  'LET DEATH DO US PART',
];

/* 固定种子伪随机 —— 保证刷新数据一致 */
let _seed = 6661313;
function rnd() { _seed = (_seed * 9301 + 49297) % 233280; return _seed / 233280; }
function pick(a) { return a[Math.floor(rnd() * a.length)]; }
function range(a, b) { return Math.floor(rnd() * (b - a + 1)) + a; }

/* ---- 生成商品 ---- */
const PRODUCTS = [];
let _pid = 6600;

CATEGORIES.forEach(cat => {
  NAME_POOL[cat.id].forEach((nm, i) => {
    const base = [29, 49, 79, 119, 169, 259, 399, 599, 899, 1599, 2999][range(0, 10)];
    const price = base + range(0, 9) * 10;
    const oldPrice = Math.round(price * (1.3 + rnd() * 0.6));
    const sales = range(66, 24000);
    _pid++;
    PRODUCTS.push({
      id: 'SK' + _pid,
      name: nm,
      cat: cat.id,
      catName: cat.name,
      sub: pick(SUB_POOL[cat.id]),
      brand: pick(BRANDS),
      icon: ICON_POOL[cat.id],
      price,
      oldPrice,
      sales,
      rating: (4.1 + rnd() * 0.9).toFixed(1),
      stock: range(3, 666),
      desc: `${cat.name} · 暗黑潮牌 · 现货速发`,
      tags: i === 0 ? ['NEW'] : (sales > 15000 ? ['爆款'] : (rnd() > 0.68 ? ['限量'] : (rnd() > 0.7 ? ['稀有'] : []))),
      specs: ['S', 'M', 'L', 'XL', '2XL', '均码'].slice(0, range(2, 5)),
      services: ['7天无理由', '正品保证', '极速退款', '包邮'].slice(0, range(2, 4)),
      commentCount: range(30, 8600),
      slogan: pick(SLOGANS),
      material: pick(['纯棉', '钛钢', '925银', '树脂', '皮革', '不锈钢', '合金', 'PVC']),
      created: '2026-0' + range(1, 9) + '-' + String(range(1, 28)).padStart(2, '0'),
    });
  });
});

/* ---- 首页轮播 ---- */
const BANNERS = [
  {
    tag: 'DEATH DEAL · 死亡折扣',
    title: '骷髅潮品<br><em>全场 5 折起</em>',
    desc: 'MEMENTO MORI — 记住你终将死去，但先把这个价拿下',
    btn: '进入墓地',
    bg: 'radial-gradient(circle at 75% 50%, rgba(193,18,31,.42), transparent 60%), linear-gradient(120deg,#0a0b10,#1a0d12)',
    glyph: '💀',
    href: 'list.html',
  },
  {
    tag: 'NEW DROP · 新品空投',
    title: '重磅骷髅卫衣<br><em>480g 加绒</em>',
    desc: '骨爪刺绣 · 落肩廓形 · 限量 666 件',
    btn: '抢购新品',
    bg: 'radial-gradient(circle at 78% 45%, rgba(157,255,60,.16), transparent 58%), linear-gradient(120deg,#0a0f0b,#131a12)',
    glyph: '🧥',
    href: 'list.html?cat=hoodie',
  },
  {
    tag: 'SILVER BONE · 银骨系列',
    title: '925 纯银<br><em>骷髅饰品</em>',
    desc: '手工雕刻 · 开口可调 · 每件独立编号',
    btn: '查看饰品',
    bg: 'radial-gradient(circle at 74% 50%, rgba(212,160,23,.22), transparent 58%), linear-gradient(120deg,#100d06,#1a1710)',
    glyph: '💍',
    href: 'list.html?cat=ring',
  },
  {
    tag: 'HOME OF BONES · 骨之家',
    title: '暗黑家居<br><em>重塑空间</em>',
    desc: '骷髅香炉灯 · 哥特挂毯 · 夜光模型',
    btn: '布置一下',
    bg: 'radial-gradient(circle at 76% 48%, rgba(139,92,246,.24), transparent 58%), linear-gradient(120deg,#0c0a12,#15111f)',
    glyph: '🕯️',
    href: 'list.html?cat=deco',
  },
];

/* ---- 平台公告 ---- */
const NOTICES = [
  { tag: '限时', text: '死亡折扣进行中，全场满 199 减 40' },
  { tag: '新品', text: 'CRANIUM 联名款上线，限量 666 件' },
  { tag: '物流', text: '暗黑仓已发货，全国次日达' },
  { tag: '活动', text: '晒单返骷髅币，最高返 200' },
  { tag: '预警', text: '稀有款随时下架，看好就下手' },
];

/* ---- 商品评价 ---- */
const REVIEWS = [
  { user: '骨***头', stars: 5, text: '实物比图还狠，印花清晰不糊，面料厚实有分量，穿上就是街上最阴间的那一个，非常满意。', glyph: '💀', imgs: ['💀', '🔥'] },
  { user: 'M***a', stars: 5, text: '朋友看到直接问链接，做工细节到位，走线整齐没有异味，这个价格能买到这种品质算捡漏了。', glyph: '🦴', imgs: ['✨'] },
  { user: '死***神', stars: 4, text: '整体不错，就是我买大了一码，建议按平时尺码选，别贪大。客服态度挺好，换货很快。', glyph: '⚰️', imgs: [] },
  { user: '墓***人', stars: 5, text: '第三件了，从去年买到现在品质一直稳定。包装也讲究，送人完全拿得出手，会一直回购。', glyph: '🕸️', imgs: ['🎁', '💯', '🖤'] },
];

/* ---- 商品详情长文 ---- */
const DETAIL_TEXT = [
  ['【设计灵感】', '灵感源自中世纪墓园浮雕与墨西哥亡灵节文化，把骷髅这一最经典的死亡符号重新解构。设计师反复打磨了 17 版图纸，才定下现在的骨骼比例与裂痕走向。'],
  ['【工艺用料】', '主料经过严格筛选与多道质检，印染采用环保工艺，色牢度达 4 级以上，反复水洗不易掉色。细节处手工处理，每件都有独立的质感。'],
  ['【版型与穿着】', '版型经过多轮真人试穿调整，兼顾廓形与舒适度，不会显得臃肿。日常通勤、街头出街、音乐节、主题派对都能撑住场面。'],
  ['【搭配建议】', '建议搭配黑色工装裤或破洞牛仔，配一双马丁靴，整体暗黑气质拉满。想低调一点就配深色休闲裤，同样好看。'],
  ['【服务承诺】', '自营暗黑仓发货，48 小时内出库；支持 7 天无理由退换，全国联保，售后有专人跟进，不用担心买错或者有质量问题。'],
];

/* ---- 购物车（localStorage） ---- */
const Cart = {
  KEY: 'skull_cart_v1',
  all() { try { return JSON.parse(localStorage.getItem(this.KEY)) || []; } catch (e) { return []; } },
  save(list) { localStorage.setItem(this.KEY, JSON.stringify(list)); this.syncBadge(); },
  add(pid, qty, spec) {
    const list = this.all();
    const p = PRODUCTS.find(x => x.id === pid);
    if (!p) return;
    const s = spec || p.specs[0];
    const same = list.find(x => x.pid === pid && x.spec === s);
    if (same) same.qty += (qty || 1);
    else list.push({ pid, qty: qty || 1, spec: s, checked: true });
    this.save(list);
  },
  remove(i) { const l = this.all(); l.splice(i, 1); this.save(l); },
  setQty(i, q) { const l = this.all(); if (l[i]) { l[i].qty = Math.max(1, q); this.save(l); } },
  clear() { this.save([]); },
  count() { return this.all().reduce((s, i) => s + i.qty, 0); },
  syncBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      const n = this.count();
      el.textContent = n > 99 ? '99+' : n;
      el.style.display = n ? 'block' : 'none';
    });
  },
};

/* ---- 工具 ---- */
const $  = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const yuan = n => '¥' + Number(n).toLocaleString('zh-CN');

function toast(msg) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove('show'), 1900);
}

/* ---- 商品卡片 ---- */
function cardHTML(p) {
  const tags = p.tags.map(t => {
    const cls = { 'NEW': 'new', '爆款': 'hot', '限量': 'limit', '稀有': 'rare' }[t] || '';
    return `<span class="tag ${cls}">${t}</span>`;
  }).join('');
  const skulls = ['💀', '☠', '🦴', '⚰️'];
  return `
  <div class="card">
    <a href="detail.html?id=${p.id}" class="card-img">
      <div class="card-tags">${tags}</div>
      <span class="glyph">${p.icon}</span>
      <span class="card-skull">${skulls[p.id.charCodeAt(4) % 4]}</span>
    </a>
    <div class="card-body">
      <a href="detail.html?id=${p.id}" class="card-title">${p.name}</a>
      <div class="card-desc">${p.brand} · ${p.sub}</div>
      <div class="card-price">
        <span class="price"><small>¥</small>${p.price.toLocaleString('zh-CN')}</span>
        <span class="price-old">¥${p.oldPrice.toLocaleString('zh-CN')}</span>
      </div>
      <div class="card-foot">
        <span class="sold">已售 ${p.sales >= 10000 ? (p.sales / 10000).toFixed(1) + '万' : p.sales} · <span class="stars">★</span>${p.rating}</span>
        <button class="add-cart" data-add="${p.id}">加入</button>
      </div>
    </div>
  </div>`;
}

function renderCards(el, list) { if (el) el.innerHTML = list.map(cardHTML).join(''); }
function byCat(c, n) { return PRODUCTS.filter(p => p.cat === c).slice(0, n); }
function hotList(n) { return [...PRODUCTS].sort((a, b) => b.sales - a.sales).slice(0, n); }
function newList(n) { return [...PRODUCTS].sort((a, b) => a.created < b.created ? 1 : -1).slice(0, n); }
function discountList(n) { return [...PRODUCTS].sort((a, b) => (b.oldPrice - b.price) / b.oldPrice - (a.oldPrice - a.price) / a.oldPrice).slice(0, n); }

/* ---- 全局加购 ---- */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-add]');
  if (b) { e.preventDefault(); Cart.add(b.dataset.add, 1); toast('☠ 已加入骨堆（购物车）'); }
});

/* ---- 全局初始化：角标 + 回到顶部 + 飘浮骷髅 ---- */
document.addEventListener('DOMContentLoaded', () => {
  Cart.syncBadge();

  const top = document.createElement('button');
  top.className = 'to-top';
  top.innerHTML = '↑';
  top.title = '回到顶部';
  top.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(top);

  /* 飘浮骷髅装饰 */
  const glyphs = ['💀', '☠', '🦴'];
  for (let i = 0; i < 6; i++) {
    const s = document.createElement('div');
    s.className = 'ghost-skull';
    s.textContent = glyphs[i % glyphs.length];
    s.style.left = (8 + i * 15) + '%';
    s.style.animationDelay = (i * 3.6) + 's';
    s.style.animationDuration = (18 + i * 2.5) + 's';
    s.style.fontSize = (18 + (i % 3) * 8) + 'px';
    document.body.appendChild(s);
  }
});
