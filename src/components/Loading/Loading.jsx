import React from 'react';

import { Spin } from 'antd';

import './Loading.scss';

const Loading = () => {
  return (
    <div className="Loading flex items-center justify-center">
      <Spin />
    </div>
  );
};

export default Loading;
