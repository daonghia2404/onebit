import React from 'react';
import { Pagination as AntdPagination } from 'antd';
import classNames from 'classnames';

import './Pagination.scss';

const Pagination = ({ page, pageSize, total = 0, className, onChange }) => {
  return (
    <div className={classNames('Pagination', className)}>
      <AntdPagination
        current={page}
        pageSize={pageSize}
        total={total}
        hideOnSinglePage
        showLessItems
        showQuickJumper={false}
        showSizeChanger={false}
        onChange={onChange}
      />
    </div>
  );
};

export default Pagination;
