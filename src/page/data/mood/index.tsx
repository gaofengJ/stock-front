import React, { useState, useEffect } from 'react';
import { STATISTICSAPI } from '@/api';
import ECharts from '@/components/echarts';

import './index.less';

const DataMood = () => {
  const [statisticsList, setStatisticsList] = useState<Record<string, any>[]>([]);
  const [options, setOptions] = useState<Record<string, any>>({});
  const getStatistics = async (date: string) => {
    try {
      const res: any = await STATISTICSAPI.getStatistics({
        date,
      });
      const { list } = res;
      setStatisticsList(list);
      setOptions((prevOptions) => ({
        ...prevOptions,
        ...{
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
            data: statisticsList.map((item) => (item.key)),
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
            data: statisticsList.map((item) => (item.value)),
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
        },
      }));
      console.log(options);
    } catch (e) {
      console.info(e);
    }
  };
  useEffect(() => {
    getStatistics('2022-01-05');
  }, []);

  return (
    <ECharts options={options} />
  );
};

export default DataMood;
