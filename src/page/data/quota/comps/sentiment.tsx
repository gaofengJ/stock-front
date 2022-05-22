import React, { useContext, useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import { store } from '@/store';
import { STATISTICSAPI } from '@/api';
import ECharts from '@/components/echarts';
import moment from 'moment';
import {
  colorStockSentimentA,
  colorStockSentimentB,
  colorStockSentimentC,
  colorStockSentimentD,
} from '@/const/color';

const { RangePicker } = DatePicker;

const Sentiment = () => {
  const { state } = useContext(store);
  const { theme } = state;
  const [dates, setDates] = useState([]);
  const [hackVale, setHackValue] = useState<any>();
  const [value, setValue] = useState();
  const onRangeChange = (valArr: any, valStrArr: any) => {
    setValue(valArr);
    getSentiment(valStrArr[0], valStrArr[1]);
  };
  const disabledDate = (current: any): boolean => {
    const maxDiff: number = 60; // 最大日期差
    if (!dates || !dates.length) return false;
    const tooLate = dates[0] && current.diff(dates[0], 'days') > maxDiff;
    const tooEarly = dates[1] && (dates[1] as any).diff(current, 'days') > maxDiff;
    return tooEarly || tooLate;
  };
  const onOpenChange = (open: boolean) => {
    if (open) {
      setHackValue([]);
      setDates([]);
    } else {
      setHackValue(undefined);
    }
  };
  const [sentimentlist, setSentimentlist] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    getSentiment();
  }, []);
  const getSentiment = async (
    startDate: string = moment(new Date())
      .subtract(20, 'days')
      .format('YYYY-MM-DD'),
    endDate: string = moment(new Date()).format('YYYY-MM-DD'),
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
    grid: {
      left: '24',
      right: '24',
      bottom: '24',
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签(为true时left，right等属性决定包含坐标轴标签在内的矩形的位置)
    },
    title: {
      text: '短线情绪',
      show: false,
      top: 8,
      left: 8,
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        interval: 0,
        rotate: 45, // 倾斜度 -90 至 90 默认为0
      },
      data: sentimentlist.map((item: Record<string, any>) => item.tradeDate),
    },
    yAxis: {
      type: 'value',
      interval: 20,
    },
    tooltip: {
      trigger: 'axis',
      padding: 8,
      borderWidth: 0,
    },
    legend: {
      top: 8,
      data: ['非一字涨停', '打板高开率', '打板成功率', '打板被砸率'],
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
    series: [
      {
        type: 'line',
        name: '非一字涨停',
        itemStyle: {
          color: colorStockSentimentA,
        },
        data: sentimentlist.map((item: Record<string, any>) => item.sentimentA),
      },
      {
        type: 'line',
        name: '打板高开率',
        itemStyle: {
          color: colorStockSentimentB,
        },
        data: sentimentlist.map((item: Record<string, any>) => item.sentimentB),
      },
      {
        type: 'line',
        name: '打板成功率',
        itemStyle: {
          color: colorStockSentimentC,
        },
        data: sentimentlist.map((item: Record<string, any>) => item.sentimentC),
      },
      {
        type: 'line',
        name: '打板被砸率',
        itemStyle: {
          color: colorStockSentimentD,
        },
        data: sentimentlist.map((item: Record<string, any>) => item.sentimentD),
      },
    ],
  });
  return (
    <div className="data-quota-statistics">
      <div className="chart-header">
        <span
          className="chart-header-title"
          style={{ color: theme === 'dark' ? 'var(--color-text-dark)' : '' }}
        >
          短线情绪指标

        </span>
        <RangePicker
          value={hackVale || value}
          disabledDate={disabledDate}
          onCalendarChange={(val: any) => setDates(val)}
          onChange={onRangeChange}
          onOpenChange={onOpenChange}
        />
      </div>
      <ECharts getOption={getOption} theme={theme} />
    </div>
  );
};

export default Sentiment;
