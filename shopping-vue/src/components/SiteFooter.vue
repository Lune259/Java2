<template>
  <footer>
    <div class="wrap">
      <div class="fgrid">
        <div>
          <div class="brand"><div class="mark">🐱</div>淘气猫商城</div>
          <p class="about">好物不贵，购物不累。<br>覆盖数码、家电、服饰、美妆、食品等 10 大品类，<br>致力于让每一次下单都简单愉快。</p>
          <div class="sub-row">
            <input placeholder="输入邮箱订阅优惠">
            <button @click="subscribe">订阅</button>
          </div>
        </div>
        <div><h5>购物指南</h5><ul><li>购物流程</li><li>会员制度</li><li>常见问题</li><li>联系客服</li></ul></div>
        <div><h5>配送方式</h5><ul><li>上门自提</li><li>快递配送</li><li>配送范围</li><li>运费说明</li></ul></div>
        <div><h5>售后服务</h5><ul><li>退换货政策</li><li>价格保护</li><li>取消订单</li><li>投诉建议</li></ul></div>
        <div><h5>关于我们</h5><ul><li>公司简介</li><li>加入我们</li><li>商家入驻</li><li>隐私政策</li></ul></div>
      </div>
      <div class="copy">
        <div>© 2026 淘气猫商城 TAOQI MALL · 仅作演示用途</div>
        <div>京ICP备 00000000 号 · 京公网安备 00000000 号</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useStore } from '../store.js'
const { toast } = useStore()
function subscribe(){ toast('订阅成功，优惠券已发放 🎁') }
</script>
