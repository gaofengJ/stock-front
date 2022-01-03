import Vue from 'vue'
import VueRouter from 'vue-router'
import { getSystemInfo } from '../utils/tool'

Vue.use(VueRouter)

const systemInfo = getSystemInfo().ua
const isMobile = systemInfo.indexOf('Mobile') > -1

const router = new VueRouter({
  mode: 'history',
  base: '/stock',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '木风同学的投资小站'
        // ignoreAsideBar: true,
        // needLogin: true
      },
      component: () => import('../views/site/index/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: '首页'
            // ignoreAsideBar: true,
            // needLogin: true
          },
          component: () => import(/* webpackChunkName: 'home' */'../views/home/index/index.vue')
        },
        {
          path: '/quotation',
          name: 'quotation',
          meta: {
            title: '行情'
            // ignoreAsideBar: true,
            // needLogin: true
          },
          component: () => import(/* webpackChunkName: 'quotation' */'../views/quotation/index/index.vue')
        },
        {
          path: '/data',
          name: 'data',
          meta: {
            title: '复盘数据'
            // ignoreAsideBar: true,
            // needLogin: true
          },
          component: () => import(/* webpackChunkName: 'data' */'../views/data/index/index.vue'),
          redirect: '/data/stocks-statistics',
          children: [
            {
              path: '/data/stocks-statistics',
              name: 'data-stocks-statistics',
              meta: {
                title: '涨跌停板'
                // ignoreAsideBar: true,
                // needLogin: true
              },
              component: () => import(/* webpackChunkName: 'data' */'../views/data/stocks-statistics/index.vue')
            },
            {
              path: '/data/limit-statistics',
              name: 'data-limit-statistics',
              meta: {
                title: '涨跌停板'
                // ignoreAsideBar: true,
                // needLogin: true
              },
              component: () => import(/* webpackChunkName: 'data' */'../views/data/limit-statistics/index.vue')
            },
            {
              path: '/data/market-sentiment',
              name: 'data-market-sentiment',
              meta: {
                title: '短线情绪'
                // ignoreAsideBar: true,
                // needLogin: true
              },
              component: () => import(/* webpackChunkName: 'data' */'../views/data/market-sentiment/index.vue')
            },
            {
              path: '/data/up-down-num',
              name: 'data-up-down-num',
              meta: {
                title: '涨跌家数'
                // ignoreAsideBar: true,
                // needLogin: true
              },
              component: () => import(/* webpackChunkName: 'data' */'../views/data/up-down-num/index.vue')
            }
          ]
        },
        {
          path: '/review',
          name: 'review',
          meta: {
            title: '每日复盘'
            // ignoreAsideBar: true,
            // needLogin: true
          },
          component: () => import(/* webpackChunkName: 'review' */'../views/review/index/index.vue')
        }
      ]
    },
    {
      path: '/mobile-interceptor',
      name: 'mobile-interceptor',
      meta: {
        title: '请在PC端访问'
      },
      component: () => import('../views/static/mobile-interceptor/index.vue')
    },
    {
      path: '*',
      name: 'not-found',
      meta: {
        title: '页面未找到'
      },
      component: () => import('../views/static/not-found/index.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!(!isMobile || to.path === '/mobile-interceptor')) { // 移动端拦截
    next({
      path: '/mobile-interceptor',
      query: to.query
    })
  }

  if (to.meta.title) { // 判斷是否有标题
    document.title = to.meta.title
  }
  next()
})

export default router
