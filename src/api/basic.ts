import request from '@/api/config';

// 查询个股信息
const getStocks = (params: Record<string, any>): Promise<any> => request(
  '/basic/stocks',
  {
    method: 'get',
    params,
  },
);

// 每日交易数据
const getDaily = (params: Record<string, any>): Promise<any> => request(
  '/basic/daily',
  {
    method: 'get',
    params,
  },
);

export {
  getStocks,
  getDaily,
};
