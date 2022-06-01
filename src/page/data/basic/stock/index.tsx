import React, { useContext, useState, useEffect } from 'react';
import { PaginationProps, Table } from 'antd';
import { store } from '@/store';
import { BASICAPI } from '@/api';
import columns from './columns';

import './index.less';

const DataBasicStock = () => {
  const { state } = useContext(store);
  const { theme } = state;
  const [stockList, setStockList] = useState([]);
  const [pageNum, setPageNum] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);
  const [total, setTotal] = useState<number>(0);

  const onChange: PaginationProps['onChange'] = (page) => {
    setPageNum(page);
  };
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (_, size) => {
    setPageNum(1);
    setPageSize(size);
  };
  useEffect(() => {
    getStocks();
  }, [pageNum, pageSize]);

  const getStocks = async () => {
    try {
      const { total: resTotal, list: resList } = await BASICAPI.getStocks({
        pageNum,
        pageSize,
      });
      setTotal(resTotal);
      setStockList(resList.map((item: Record<string, any>) => ({
        ...item,
        key: item.id,
      })));
    } catch (e) {
      console.info(e);
    }
  };
  return (
    <Table
      dataSource={stockList}
      columns={columns}
      scroll={{ x: 4000 }}
      pagination={{
        current: pageNum,
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

export default DataBasicStock;
