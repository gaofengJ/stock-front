import request from '@/api/config';

// 查询统计接口
// eslint-disable-next-line import/prefer-default-export
const getStatistics = (params: Record<string, any>): Promise<any> => request(
  'url',
  {
    method: 'get',
    params,
  },
);

export {
  getStatistics,
};
