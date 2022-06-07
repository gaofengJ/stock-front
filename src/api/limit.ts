import request from '@/api/config';

// 查询个股涨跌统计
const getLimitConnects = (params: Record<string, any>): Promise<any> => request(
  '/limit/connects',
  {
    method: 'get',
    params,
  },
);

// 查询涨停板复盘
const getLimitReview = (params: Record<string, any>): Promise<any> => request(
  '/limit/review',
  {
    method: 'get',
    params,
  },
);

// 查询连板梯队
const getLimitEchelon = (params: Record<string, any>): Promise<any> => request(
  '/limit/echelon',
  {
    method: 'get',
    params,
  },
);

export {
  getLimitConnects,
  getLimitReview,
  getLimitEchelon,
};
