<template>
  <div class="market-sentiment">
    <div class="search-wrap">
      <div class="filter-item">
        <el-date-picker
          v-model="dateArr"
          type="daterange"
          value-format="yyyy-MM-dd"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期" />
        <el-button type="primary" @click="handleSearch">搜索</el-button>
      </div>
    </div>
    <div class="echart-wrap">
      <div ref="echart" style="width: 800px; height:500px;" class="echart"></div>
    </div>
  </div>
</template>
<script>
import { dateFormat } from '@/utils/date'
import {
  getList
} from '@/services/data/market-sentiment'
export default {
  data () {
    return {
      dateArr: ['', ''],
      list: []
    }
  },
  async created () {
    this.initDate()
    await this.getList()
    this.$nextTick(() => {
      this.initEchart()
    })
  },
  methods: {
    initDate () {
      const currentDate = dateFormat(new Date())
      this.dateArr[0] = (() => {
        const dateArr = currentDate.split('-')
        dateArr[1] = dateArr[1] === '01' ? '12' : dateArr[1] - 1 + '' // 取上一个月
        return dateArr.join('-')
      })()
      this.dateArr[1] = currentDate
    },
    async getList () {
      try {
        const { list } = await getList({
          startDate: this.dateArr[0],
          endDate: this.dateArr[1]
        })
        this.list = list
      } catch (e) {
      }
    },
    initEchart () {
      const chart = this.$echarts.init(this.$refs.echart)
      chart.setOption({
        title: {
          text: '短线情绪指标'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['非一字涨停', '打板高开率', '打板成功率', '打板被砸率']
        },
        color: ['#E26CB3', '#FFA283', '#67E0E3', '#37A2DA'],
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            rotate: -90
          },
          data: this.getEchartsData('date')
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '非一字涨停',
            type: 'line',
            data: this.getEchartsData('sentiment_a')
          },
          {
            name: '打板高开率',
            type: 'line',
            data: this.getEchartsData('sentiment_b')
          },
          {
            name: '打板成功率',
            type: 'line',
            data: this.getEchartsData('sentiment_c')
          },
          {
            name: '打板被砸率',
            type: 'line',
            data: this.getEchartsData('sentiment_d')
          }
        ]
      })
    },
    getEchartsData (type) {
      const list = []
      this.list.forEach(item => {
        list.push(item[type])
      })
      return list
    },
    async handleSearch () {
      await this.getList()
      this.$nextTick(() => {
        this.initEchart()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.market-sentiment {
  padding: 0 30px;
  .search-wrap {
    padding: 10px 0;
    .filter-item {
      display: inline-flex;
      align-items: center;
      .el-range-editor {
        margin-right: 10px;
        ::v-deep .el-range-separator {
          width: 20px;
        }
      }
    }
  }
  .echart-wrap {
    padding-top: 60px;
    width: 100%;
    .echart {
      margin: 0 auto;
    }
  }
}
</style>
