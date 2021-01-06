import createRequest from '@core/request'

export const getList = async (params) => {
  return await createRequest('baseUrl').post('/market-analysis/percent-statistics', params)
}
