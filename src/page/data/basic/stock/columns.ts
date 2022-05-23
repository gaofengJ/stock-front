const columns: Record<string, any>[] = [
  {
    title: '股票代码',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: '股票名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '股票全称',
    dataIndex: 'fullname',
    key: 'fullname',
  },
  {
    title: '所在行业',
    dataIndex: 'industry',
    key: 'industry',
  },
  {
    title: '所在区域',
    dataIndex: 'area',
    key: 'area',
  },
  {
    title: '交易所',
    dataIndex: 'market',
    key: 'market',
  },
  {
    title: '上市状态',
    dataIndex: 'listStatus',
    key: 'listStatus',
  },
  {
    title: '上市日期',
    dataIndex: 'listDate',
    key: 'listDate',
  },
  {
    title: '是否为沪深港通',
    dataIndex: 'isHs',
    key: 'isHs',
  },
];

export default columns;
