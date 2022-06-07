import type { ColumnsType } from 'antd/lib/table';

interface DataType {
  id: number;
  tsCode: string;
  name: string;
  close: number;
  pctChg: number;
  connectNum: number;
  firstTime: string;
  lastTime: string;
  openTimes: number;
  strth: number;
  industry: string;
  market: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: '股票代码',
    dataIndex: 'tsCode',
    key: 'tsCode',
  },
  {
    title: '股票名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '行业',
    dataIndex: 'industry',
    key: 'industry',
  },
  {
    title: '行业',
    dataIndex: 'market',
    key: 'market',
  },
  {
    title: '现价',
    dataIndex: 'close',
    key: 'close',
  },
  {
    title: '涨跌幅',
    dataIndex: 'pctChg',
    key: 'pctChg',
  },
  {
    title: '连板数',
    dataIndex: 'connectNum',
    key: 'connectNum',
  },
  {
    title: '首次涨停时间',
    dataIndex: 'firstTime',
    key: 'firstTime',
  },
  {
    title: '最后涨停时间',
    dataIndex: 'lastTime',
    key: 'lastTime',
  },
  {
    title: '开板次数',
    dataIndex: 'openTimes',
    key: 'openTimes',
  },
  {
    title: '涨停强度',
    dataIndex: 'strth',
    key: 'strth',
  },
];
export default columns;
