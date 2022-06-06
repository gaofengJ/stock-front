import request from '@/api/config';

// 查询个股涨跌统计
const getLimitConnects = (params: Record<string, any>): Promise<any> => request(
  '/limit/connects',
  {
    method: 'get',
    params,
  },
);

export {
  getLimitConnects,
};
