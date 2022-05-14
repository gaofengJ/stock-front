import React, { useState, useEffect } from 'react';
import { STATISTICSAPI } from '@/api';
import ECharts from '@/components/echarts';

const Statistics = () => {
  const [statisticslist, setStatisticslist] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    getStatistics();
  }, []);
  const getStatistics = async (date: string = '2022-01-05') => {
    try {
      const { list } = await STATISTICSAPI.getStatistics({
        date,
      });
      setStatisticslist(list);
    } catch (e) {
      console.info(e);
    }
  };
  const getOption = () => ({
    title: {
      text: '个股涨跌统计',
      subtext: '2022-01-05',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      data: statisticslist.map((item: Record<string, any>) => (item.key)),
      // x轴坐标样式
      axisLabel: {
        interval: 0,
        rotate: 45, // 倾斜度 -90 至 90 默认为0
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      data: statisticslist.map((item: Record<string, any>) => (item.value)),
      type: 'bar',
      itemStyle: {
        normal: {
          color(params: any) {
            const colorList = ['#FF0000', '#04B431', '#BDBDBD'];
            if (params.dataIndex === 10) {
              return colorList[2];
            }
            if (params.dataIndex > 10) { // 涨幅为0的index为10
              return colorList[0];
            }
            return colorList[1];
          },
        },
      },
    }],
  });
  return (
    <ECharts getOption={getOption} />
  );
};

export default Statistics;
