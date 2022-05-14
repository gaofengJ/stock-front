import React, { useState, useEffect } from 'react';
import { STATISTICSAPI } from '@/api';
import ECharts from '@/components/echarts';

const UpNum = () => {
  const [numList, setNumList] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    getNum();
  }, []);
  const getNum = async (
    startDate: string = '2022-01-04',
    endDate: string = '2022-01-28',
  ) => {
    try {
      const { list } = await STATISTICSAPI.getNum({
        startDate,
        endDate,
      });
      setNumList(list);
    } catch (e) {
      console.info(e);
    }
  };
  const getOption = () => ({
    title: {
      text: '涨跌家数',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['上涨家数'],
    },
    color: ['#FF0000'],
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
      boundaryGap: false,
      axisLabel: {
        rotate: -90,
      },
      data: numList.map((item: Record<string, any>) => item.tradeDate),
    },
    yAxis: {
      type: 'value',
      max: (val: Record<string, any>) => val.max + 500,
      min: () => 0,
    },
    series: [
      {
        name: '上涨家数',
        type: 'line',
        data: numList.map((item: Record<string, any>) => item.up),
      },
    ],
  });
  return (
    <ECharts getOption={getOption} />
  );
};

export default UpNum;
