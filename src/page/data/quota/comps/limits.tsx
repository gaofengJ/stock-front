import React, { useContext, useState, useEffect } from 'react';
import { DatePicker } from 'antd';
import { store } from '@/store';
import { ANALYSISAPI } from '@/api';
import ECharts from '@/components/echarts';
import moment from 'moment';
import { colorStockGreen, colorStockRed } from '@/const/color';

const { RangePicker } = DatePicker;

const Limits = () => {
  const { state } = useContext(store);
  const { theme } = state;

  const dateFormat = 'YYYY-MM-DD';
  const [dates, setDates] = useState([]);
  const [hackVale, setHackValue] = useState<any>();
  const defaultDate = [
    moment().subtract(30, 'days'), // 30天前
    moment().hour() < 19 ? moment().subtract(1, 'days') : moment(), // 早于18点取前一天
  ];
  const [value, setValue] = useState(defaultDate);
  const onRangeChange = (valArr: any, valStrArr: any) => {
    setValue(valArr);
    getLimits(valStrArr[0], valStrArr[1]);
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
  const [limitList, setLimitList] = useState<Record<string, any>[]>([]);
  useEffect(() => {
    getLimits();
  }, []);
  const getLimits = async (
    startDate: string = defaultDate[0]?.format(dateFormat),
    endDate: string = defaultDate[1]?.format(dateFormat),
  ) => {
    try {
      const { list } = await ANALYSISAPI.getLimits({
        startDate,
        endDate,
      });
      setLimitList(list);
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
      text: '涨跌停家数',
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
      data: limitList.map((item: Record<string, any>) => item.tradeDate),
    },
    yAxis: {
      type: 'value',
      interval: 500,
    },
    tooltip: {
      trigger: 'axis',
      padding: 8,
      borderWidth: 0,
    },
    legend: {
      top: 8,
      data: ['涨停家数', '跌停家数'],
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
        name: '涨停家数',
        itemStyle: {
          color: colorStockRed,
        },
        data: limitList.map((item: Record<string, any>) => item.up),
      },
      {
        type: 'bar',
        name: '跌停家数',
        itemStyle: {
          color: colorStockGreen,
        },
        data: limitList.map((item: Record<string, any>) => item.down),
      },
    ],
  });
  return (
    <div className="data-quota-item">
      <div className="chart-header">
        <span
          className="chart-header-title"
          style={{ color: theme === 'dark' ? 'var(--color-text-dark)' : '' }}
        >
          涨跌停家数

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

export default Limits;
