import React, { useContext, useState, useEffect } from 'react';
import { PaginationProps, Table } from 'antd';
import { store } from '@/store';
import moment from 'moment';
import { BASICAPI } from '@/api';
import columns from './columns';

import './index.less';

const DataBasicDaily = () => {
  const { state } = useContext(store);
  const { theme } = state;

  const dateFormat = 'YYYY-MM-DD';
  const defaultDate = moment().hour() < 19 ? moment().subtract(1, 'days') : moment(); // 早于19点取前一天
  const [dailyList, setDailyList] = useState([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);
  const [total, setTotal] = useState<number>(0);

  const onChange: PaginationProps['onChange'] = (page) => {
    setPageNum(page);
  };
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (_, size) => {
    setPageSize(size);
  };
  useEffect(() => {
    getDaily();
  }, [pageNum, pageSize]);

  const getDaily = async (date: string = defaultDate.format(dateFormat)) => {
    try {
      const { total: resTotal, list: resList } = await BASICAPI.getDaily({
        pageNum,
        pageSize,
        date,
      });
      setTotal(resTotal);
      setDailyList(resList.map((item: Record<string, any>) => ({
        ...item,
        key: item.id,
      })));
    } catch (e) {
      console.info(e);
    }
  };
  return (
    <Table
      dataSource={dailyList}
      columns={columns}
      scroll={{ x: 4000, y: 'calc(100vh - 400px)' }}
      pagination={{
        pageSize,
        total,
        showSizeChanger: true,
        pageSizeOptions: [10, 20, 50, 100],
        onChange,
        onShowSizeChange,
      }}
      className={theme === 'dark' ? 'dark' : ''}
    />
  );
};

export default DataBasicDaily;
