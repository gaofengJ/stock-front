import React, { useContext, useState, useEffect } from 'react';
import { Table } from 'antd';
import { store } from '@/store';
import moment from 'moment';
import { LIMITAPI } from '@/api';
import columns from './columns';

import './index.less';

const DataLimitReview = () => {
  const { state } = useContext(store);
  const { theme } = state;

  const dateFormat = 'YYYY-MM-DD';
  const defaultDate = moment().hour() < 19 ? moment().subtract(1, 'days') : moment(); // 早于19点取前一天
  const [loading, setLoading] = useState(false);
  const [limitReviewList, setLimitReviewList] = useState([]);

  useEffect(() => {
    getLimitReview();
  }, []);

  const getLimitReview = async (date: string = defaultDate.format(dateFormat)) => {
    try {
      setLoading(true);
      const { list: resList } = await LIMITAPI.getLimitReview({
        date,
      });
      setLimitReviewList(resList.map((item: Record<string, any>) => ({
        ...item,
        key: item.id,
      })));
    } catch (e) {
      console.info(e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Table
      dataSource={limitReviewList}
      columns={columns}
      loading={loading}
      className={theme === 'dark' ? 'dark' : ''}
    />
  );
};

export default DataLimitReview;
