import React, { useContext, useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import { store } from '@/store';
import { STATISTICSAPI } from '@/api';
import ECharts from '@/components/echarts';
import moment from 'moment';
import { colorStockGreen, colorStockGray, colorStockRed } from '@/const/color';

const Statistics = () => {
  const { state } = useContext(store);
  const { theme } = state;
  const [value, setValue] = useState();
  const onDateChange = (val: any, valStr: string) => {
    setValue(val);
    getStatistics(valStr);
  };
  const [statisticslist, setStatisticslist] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    getStatistics();
  }, []);
  const getStatistics = async (
    date: string = moment(new Date()).format('YYYY-MM-DD'),
  ) => {
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
    grid: {
      left: '24',
      right: '24',
      bottom: '24',
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签(为true时left，right等属性决定包含坐标轴标签在内的矩形的位置)
    },
    title: {
      text: '个股涨跌统计',
      show: false,
      top: 8,
      left: 8,
    },
    xAxis: {
      type: 'category', // 类目轴
      axisLabel: { // x轴坐标样式
        interval: 0,
        rotate: 45, // 倾斜度 -90 至 90 默认为0
      },
      data: statisticslist.map((item: Record<string, any>) => (item.key)),
    },
    yAxis: {
      type: 'value',
      interval: 200,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      padding: 8,
      borderWidth: 0,
    },
    toolbox: {
      feature: {
        saveAsImage: {
          title: '保存为图片',
        },
      },
      top: 8,
      right: 8,
    },
    series: [{
      type: 'bar',
      itemStyle: {
        normal: {
          color(params: Record<string, any>) {
            if (params.dataIndex > 10) {
              return colorStockRed;
            }
            if (params.dataIndex < 10) {
              return colorStockGreen;
            }
            return colorStockGray;
          },
        },
      },
      data: statisticslist.map((item: Record<string, any>) => (item.value)),
    }],
  });
  return (
    <div className="data-quota-statistics">
      <div className="chart-header">
        <span
          className="chart-header-title"
          style={{ color: theme === 'dark' ? 'var(--color-text-dark)' : '' }}
        >
          个股涨跌统计

        </span>
        <DatePicker
          bordered={false}
          value={value}
          onChange={onDateChange}
        />
      </div>
      <ECharts getOption={getOption} theme={theme} />
    </div>
  );
};

export default Statistics;
