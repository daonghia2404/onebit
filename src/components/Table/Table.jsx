import React from 'react';
import classNames from 'classnames';
import { Table as AntdTable } from 'antd';

import './Table.scss';

const Table = ({ className, columns, dataSources, loading, rowKey = 'id', title }) => {
  return (
    <div className={classNames('Table', className)}>
      <div className="Table-body">
        <AntdTable
          pagination={false}
          columns={columns}
          dataSource={dataSources}
          loading={loading}
          rowKey={rowKey}
          title={title}
        />
      </div>
    </div>
  );
};

export default Table;
