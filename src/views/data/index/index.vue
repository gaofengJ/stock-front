<template>
  <div class="data">
    <div class="left">
      <div class="aside">
        <ul class="aside_nav">
          <li class="nav_item">
            <ul class="sub_nav">
              <li class="sub_nav_item" :class="{ 'active': $route.path === '/data/stocks-statistics' }"><router-link to="/data/stocks-statistics">涨跌统计</router-link></li>
              <!-- <li class="sub_nav_item" :class="{ 'active': $route.path === '/data/limit-statistics' }"><router-link to="/data/limit-statistics">涨跌停板</router-link></li> -->
              <li class="sub_nav_item" :class="{ 'active': $route.path === '/data/market-sentiment' }"><router-link to="/data/market-sentiment">短线情绪</router-link></li>
              <li class="sub_nav_item" :class="{ 'active': $route.path === '/data/up-down-num' }"><router-link to="/data/up-down-num">涨跌家数</router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="center">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.left {
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
  width: 300px;
  height: 100%;
  .aside {
    padding: 30px 0 30px 100px;
    &_nav {
      li {
        list-style: none;
      }
      .nav_item a, .sub_nav_item a {
        display: block;
        overflow: hidden;
        height: 40px;
        line-height: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 16px;
        font-weight: 700;
        color: #333333;
      }
      .sub_nav_item {
        a {
          font-size: 14px;
          color: #444444;
          font-weight: 400;
        }
        &.active {
          a {
            font-weight: bold;
          }
        }
      }
    }
  }
}
.center {
  box-sizing: border-box;
  padding: 30px 0 30px 300px;
  width: 100%;
}
</style>
