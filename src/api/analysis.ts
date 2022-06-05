import request from '@/api/config';

// 查询个股涨跌统计
const getStatistics = (params: Record<string, any>): Promise<any> => request(
  '/analysis/statistics',
  {
    method: 'get',
    params,
  },
);

// 查询上涨家数
const getNum = (params: Record<string, any>): Promise<any> => request(
  '/analysis/num',
  {
    method: 'get',
    params,
  },
);

// 查询涨跌停家数
const getLimits = (params: Record<string, any>): Promise<any> => request(
  '/analysis/limits',
  {
    method: 'get',
    params,
  },
);

// 查询短线情绪指标
const getSentiment = (params: Record<string, any>): Promise<any> => request(
  '/analysis/sentiment',
  {
    method: 'get',
    params,
  },
);

export {
  getStatistics,
  getNum,
  getLimits,
  getSentiment,
};
