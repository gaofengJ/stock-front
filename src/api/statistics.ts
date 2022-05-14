import request from '@/api/config';

// 查询统计接口
// eslint-disable-next-line import/prefer-default-export
const getStatistics = (params: Record<string, any>): Promise<any> => request(
  '/analysis/statistics',
  {
    method: 'get',
    params,
  },
);

export {
  getStatistics,
};
