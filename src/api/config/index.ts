import axios, { AxiosResponse } from 'axios';
import { message } from 'antd';
import { TypeApi } from '../index.d';

const BASE_URL: string = import.meta.env.MODE === 'development' ? '/api' : `${window.location.origin}/api`;

const HEADER_PARAMS = {
  'X-CSRF': `csrf-${Math.random()}`,
};

/**
 * @description axios封装
 */
const client = axios.create({
  // transformRequest: [
  //   (body) => JSON.stringify(
  //     Object.assign(body, {
  //       token: TUSHARE_CONF.token,
  //     }),
  //   ),
  // ],
  transformResponse: [
    (response) => (JSON.parse(response)),
  ],
});

export default async function request(
  url: string,
  config: any,
): Promise<
  AxiosResponse<TypeApi.Res> | undefined> {
  const headers: Record<string, any> = {
    ...config.headers,
    Accept: 'application/json',
    'Content-Type': config?.['Content-Type'] ? config['Content-Type'] : 'application/json',
    ...HEADER_PARAMS,
  };

  // eslint-disable-next-line no-param-reassign
  config.params = config.params || {};

  const response = await client.request({
    url: config.picture ? url : `${BASE_URL}${url}`,
    headers,
    ...config,
  });
  const { data } = response;
  // 统一处理response.data
  if (data && data.code === 0) return data.data;
  return message.error(data.msg);
}
