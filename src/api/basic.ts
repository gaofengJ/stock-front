import request from '@/api/config';

// 查询个股信息
const getStocks = (params: Record<string, any>): Promise<any> => request(
  '/basic/stocks',
  {
    method: 'get',
    params,
  },
);

export {
  getStocks,
};
