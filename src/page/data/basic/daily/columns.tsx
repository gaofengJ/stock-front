import type { ColumnsType } from 'antd/lib/table';

interface DataType {
  id: number;
  tsCode: string;
  name: string;
  tradeDate: string;
  upLimit: string;
  downLimit: string;
  open: number;
  high: number;
  low: number;
  close: number;
  preClose: number;
  change: number;
  pctChg: number;
  vol: number;
  amount: number;
  turnoverRate: number;
  turnoverRateF: number;
  volumeRatio: number;
  pe: number;
  peTtm: number;
  pb: number;
  ps: number;
  psTtm: number;
  dvRatio: number;
  dvTtm: number;
  totalShare: number;
  floatShare: number;
  freeShare: number;
  totalMv: number;
  circMv: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: '股票代码',
    dataIndex: 'tsCode',
    key: 'tsCode',
    fixed: 'left',
  },
  {
    title: '股票名称',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: '交易日期',
    dataIndex: 'tradeDate',
    key: 'tradeDate',
    fixed: 'left',
  },
  {
    title: '涨停价',
    dataIndex: 'upLimit',
    key: 'upLimit',
  },
  {
    title: '跌停价',
    dataIndex: 'downLimit',
    key: 'downLimit',
  },
  {
    title: '开盘价',
    dataIndex: 'open',
    key: 'open',
  },
  {
    title: '最高价',
    dataIndex: 'high',
    key: 'high',
  },
  {
    title: '最低价',
    dataIndex: 'low',
    key: 'low',
  },
  {
    title: '收盘价',
    dataIndex: 'close',
    key: 'close',
  },
  {
    title: '昨收价',
    dataIndex: 'preClose',
    key: 'preClose',
  },
  {
    title: '涨跌额',
    dataIndex: 'change',
    key: 'change',
  },
  {
    title: '涨跌幅',
    dataIndex: 'pctChg',
    key: 'pctChg',
  },
  {
    title: '成交量（手）',
    dataIndex: 'vol',
    key: 'vol',
  },
  {
    title: '成交额（千元）',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: '换手率（%）',
    dataIndex: 'turnoverRate',
    key: 'turnoverRate',
  },
  {
    title: '换手率（自由流通股）（%）',
    dataIndex: 'turnoverRateF',
    key: 'turnoverRateF',
    width: 136,
  },
  {
    title: '量比',
    dataIndex: 'volumeRatio',
    key: 'volumeRatio',
  },
  {
    title: '市盈率（总市值/总利润）（%）',
    dataIndex: 'pe',
    key: 'pe',
    width: 136,
  },
  {
    title: '市盈率（TTM）（%）',
    dataIndex: 'peTtm',
    key: 'peTtm',
    width: 136,
  },
  {
    title: '市净率（总市值/净资产）（%）',
    dataIndex: 'pb',
    key: 'pb',
    width: 136,
  },
  {
    title: '市销率',
    dataIndex: 'ps',
    key: 'ps',
  },
  {
    title: '市销率（TTM）',
    dataIndex: 'psTtm',
    key: 'psTtm',
  },
  {
    title: '股息率（%）',
    dataIndex: 'dvRatio',
    key: 'dvRatio',
  },
  {
    title: '股息率（TTM）（%）',
    dataIndex: 'dvTtm',
    key: 'dvTtm',
    width: 136,
  },
  {
    title: '总股本',
    dataIndex: 'totalShare',
    key: 'totalShare',
  },
  {
    title: '流通股本',
    dataIndex: 'floatShare',
    key: 'floatShare',
  },
  {
    title: '自由流通股本',
    dataIndex: 'freeShare',
    key: 'freeShare',
  },
  {
    title: '总市值',
    dataIndex: 'totalMv',
    key: 'totalMv',
  },
  {
    title: '流通市值',
    dataIndex: 'circMv',
    key: 'circMv',
  },
];
export default columns;
