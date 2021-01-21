<template>
  <div class="site_top_bar">
    <div class="top_container">
      <div class="top_container_left">
        <div class="logo"><i class="iconfont icon_fengye"></i><i>木风同学</i></div>
        <el-input v-model="searchKey"
                  placeholder="搜索"
                  prefix-icon="el-icon-search"
                  @keyup.enter.native="handelSearch"/>
        <div class="tabs">
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="tab"
            :class="{ 'active': tab.value === activeTab }"
            @click="handleActiveChanged(tab.value)">{{ tab.label }}</div>
        </div>
      </div>
      <div class="top_container_right">
        <img :src="avatar || require('@/styles/icons/icon_avatar_boy.png')" class="avatar">
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      searchKey: '', // 搜索关键字
      tabs: [
        {
          label: '首页',
          value: 'home'
        },
        {
          label: '行情',
          value: 'quotation'
        },
        {
          label: '复盘数据',
          value: 'data'
        },
        {
          label: '每日复盘',
          value: 'review'
        }
      ],
      activeTab: 'home',
      avatar: ''
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        this.activeTab = val.path.slice(1).split('/')[0]
      },
      deep: true,
      immediate: true
    }
  },
  // computed: {
  //   isShowSiteAsideBar () {
  //     if (this.$route.meta.ignoreAsideBar) return false
  //     return true
  //   },
  //   user () {
  //     return this.$store.state.user || {}
  //   }
  // },
  methods: {
    handleActiveChanged (tab) {
      if (tab === this.activeTab) return
      this.activeTab = tab
      this.$router.push(`/${tab}`)
    },
    handelSearch () {
      this.$message({
        type: '',
        message: '敬请期待哦',
        center: true
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.site_top_bar {
  position: fixed;
  z-index: 9;
  left: 0;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #FFFFFF;
  box-shadow: 0 2px 3px 0 rgba(115, 126, 156, 0.10);
  .top_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    max-width: 1200px;
    height: 100%;
    &_left {
      display: flex;
      align-items: center;
      .logo {
        margin-right: 50px;
        flex: 0 0 140px;
        font-size: 24px;
        i {
          vertical-align: middle;
        }
        .icon_fengye {
          font-family: 'Microsoft YaHei';
          font-size: 28px;
          color: #D81E06;
        }
      }
      .el-input {
        margin-right: 30px;
        width: 200px;
        height: 30px;
        ::v-deep .el-input__inner {
          height: 30px;
          background-color: #FFFFFF;
        }
        ::v-deep .el-input__prefix {
          top: -5px;
        }
      }
      .tabs {
        min-width: 300px;
        cursor: pointer;
        .tab {
          padding: 0 16px;
          display: inline-block;
          transition: all .2s cubic-bezier(.42, 0, .58, 1);
          &.active {
            font-weight: bold;
          }
        }
      }
    }
    &_right {
      .avatar {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
  }
}
</style>
