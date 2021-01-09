<template>
  <div class="market-sentiment">
    <div class="search-wrap">
      <div class="filter-item">
        <el-date-picker
          v-model="date"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
          @change="handleSearch"/>
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
} from '@/services/data/stocks-statistics'
export default {
  data () {
    return {
      date: '',
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
      this.date = dateFormat(new Date())
    },
    async getList () {
      try {
        const { list } = await getList({
          date: this.date
        })
        this.list = list
      } catch (e) {
      }
    },
    initEchart () {
      const chart = this.$echarts.init(this.$refs.echart)
      chart.setOption({
        title: {
          text: '个股涨跌统计',
          subtext: this.date
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
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
          data: this.getEchartsData('key'),
          // x轴坐标样式
          axisLabel: {
            interval: 0,
            rotate: 45 // 倾斜度 -90 至 90 默认为0
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.getEchartsData('value'),
          type: 'bar',
          itemStyle: {
            normal: {
              color: function (params) {
                const colorList = ['#FF0000', '#04B431', '#BDBDBD']
                return params.dataIndex === 10 ? colorList[2] : params.dataIndex > 10 ? colorList[0] : colorList[1] // 涨幅为0的index为10
              }
            }
          }
        }]
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
        .el-date-editor {
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
