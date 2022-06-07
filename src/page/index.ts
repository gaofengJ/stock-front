import Dashboard from './dashboard'; // 整体结构
import Home from './home'; // 首页
import Market from './market'; // 市场行情
import Data from './data'; // 数据分析
import DataQuota from './data/quota'; // 数据分析 -> 情绪指标
import DataLimit from './data/limit'; // 数据分析 -> 连板统计
import DataLimitReview from './data/limit-review'; // 数据分析 -> 涨停板复盘
import DataBasic from './data/basic'; // 数据分析 -> 基础信息
import DataBasicStock from './data/basic/stock'; // 数据分析 -> 基础信息 -> 个股基本信息
import DataBasicDaily from './data/basic/daily'; // 数据分析 -> 基础信息 -> 每日交易数据
import Review from './review'; // 每日复盘

export {
  Dashboard,
  Home,
  Market,
  Data,
  DataQuota,
  DataLimit,
  DataLimitReview,
  DataBasic,
  DataBasicStock,
  DataBasicDaily,
  Review,
};
