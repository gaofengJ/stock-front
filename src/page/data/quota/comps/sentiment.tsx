import React, { useState, useEffect } from 'react';
import { STATISTICSAPI } from '@/api';
import ECharts from '@/components/echarts';

const Sentiment = () => {
  const [sentimentlist, setSentimentlist] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    getSentiment();
  }, []);
  const getSentiment = async (
    startDate: string = '2022-01-04',
    endDate: string = '2022-01-28',
  ) => {
    try {
      const { list } = await STATISTICSAPI.getSentiment({
        startDate,
        endDate,
      });
      setSentimentlist(list);
    } catch (e) {
      console.info(e);
    }
  };
  const getOption = () => ({
    title: {
      text: '短线情绪指标',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['非一字涨停', '打板高开率', '打板成功率', '打板被砸率'],
    },
    color: ['#E26CB3', '#FFA283', '#67E0E3', '#37A2DA'],
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
      data: sentimentlist.map((item: Record<string, any>) => (item.tradeDate)),
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '非一字涨停',
        type: 'line',
        data: sentimentlist.map((item: Record<string, any>) => (item.sentimentA)),
      },
      {
        name: '打板高开率',
        type: 'line',
        data: sentimentlist.map((item: Record<string, any>) => (item.sentimentB)),
      },
      {
        name: '打板成功率',
        type: 'line',
        data: sentimentlist.map((item: Record<string, any>) => (item.sentimentC)),
      },
      {
        name: '打板被砸率',
        type: 'line',
        data: sentimentlist.map((item: Record<string, any>) => (item.sentimentD)),
      },
    ],
  });
  return (
    <ECharts getOption={getOption} />
  );
};

export default Sentiment;
